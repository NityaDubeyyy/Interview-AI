"use client";

import React, { useEffect, useRef, useState } from "react";
import { Camera, CameraOff, Mic, MicOff, AlertCircle, UserCheck } from "lucide-react";

interface CameraPreviewProps {
  isCamOn: boolean;
  isMicOn: boolean;
  onToggleCam: () => void;
  onToggleMic: () => void;
}

export default function CameraPreview({
  isCamOn,
  isMicOn,
  onToggleCam,
  onToggleMic,
}: CameraPreviewProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const [streamError, setStreamError] = useState<string | null>(null);
  const [isInitializing, setIsInitializing] = useState<boolean>(true);

  // Request getUserMedia on mount
  useEffect(() => {
    let isSubscribed = true;

    async function initCamera() {
      setIsInitializing(true);
      setStreamError(null);

      try {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
          throw new Error("MediaDevices API is not supported in this browser environment.");
        }

        const stream = await navigator.mediaDevices.getUserMedia({
          video: { width: { ideal: 1280 }, height: { ideal: 720 }, facingMode: "user" },
          audio: true,
        });

        if (!isSubscribed) {
          stream.getTracks().forEach((track) => track.stop());
          return;
        }

        streamRef.current = stream;

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }

        setIsInitializing(false);
      } catch (err: any) {
        console.warn("Camera preview getUserMedia error:", err);
        if (isSubscribed) {
          setStreamError(err.message || "Camera or Microphone access was denied or unavailable.");
          setIsInitializing(false);
        }
      }
    }

    initCamera();

    return () => {
      isSubscribed = false;
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
        streamRef.current = null;
      }
    };
  }, []);

  // Update track enabled state when isCamOn changes
  useEffect(() => {
    if (streamRef.current) {
      const videoTracks = streamRef.current.getVideoTracks();
      videoTracks.forEach((track) => {
        track.enabled = isCamOn;
      });
    }
  }, [isCamOn]);

  // Update track enabled state when isMicOn changes
  useEffect(() => {
    if (streamRef.current) {
      const audioTracks = streamRef.current.getAudioTracks();
      audioTracks.forEach((track) => {
        track.enabled = isMicOn;
      });
    }
  }, [isMicOn]);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "240px",
        background: "rgba(10, 10, 18, 0.9)",
        border: "1px solid rgba(255, 255, 255, 0.12)",
        borderRadius: "18px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
      }}
    >
      {/* LIVE VIDEO FEED */}
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: "scaleX(-1)", // Mirror video for natural preview
          display: isCamOn && !streamError && !isInitializing ? "block" : "none",
        }}
      />

      {/* CAMERA OFF OR ERROR FALLBACK VIEW */}
      {(!isCamOn || streamError || isInitializing) && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.5rem",
            textAlign: "center",
            color: "#94a3b8",
            gap: "0.75rem",
          }}
        >
          {isInitializing ? (
            <>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  border: "3px solid rgba(139, 92, 246, 0.3)",
                  borderTopColor: "#8b5cf6",
                  borderRadius: "50%",
                  animation: "spin 1s linear infinite",
                }}
              />
              <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "#cbd5e1" }}>
                Connecting Camera Feed...
              </span>
            </>
          ) : streamError ? (
            <>
              <AlertCircle size={36} color="#f87171" />
              <div style={{ fontSize: "0.85rem", color: "#fca5a5", fontWeight: 600 }}>
                Camera Feed Unavailable
              </div>
              <div style={{ fontSize: "0.75rem", color: "#94a3b8", maxWidth: "220px" }}>
                {streamError.includes("denied")
                  ? "Permission denied. Enable browser camera access to turn on preview."
                  : "Virtual camera simulation active."}
              </div>
            </>
          ) : (
            <>
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#64748b",
                }}
              >
                <UserCheck size={32} />
              </div>
              <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "#cbd5e1" }}>
                Camera Disabled
              </div>
            </>
          )}
        </div>
      )}

      {/* TOP STATUS OVERLAY */}
      <div
        style={{
          position: "absolute",
          top: "12px",
          left: "12px",
          right: "12px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            background: "rgba(10, 10, 18, 0.75)",
            backdropFilter: "blur(8px)",
            padding: "4px 10px",
            borderRadius: "20px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            fontSize: "0.75rem",
            fontWeight: 700,
            color: "white",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: isCamOn && !streamError ? "#10b981" : "#ef4444",
              boxShadow: isCamOn && !streamError ? "0 0 8px #10b981" : "none",
            }}
          />
          {isCamOn && !streamError ? "REC PREVIEW" : "OFFLINE"}
        </div>

        {/* MIC AUDIO PULSE INDICATOR */}
        {isMicOn && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "3px",
              background: "rgba(10, 10, 18, 0.75)",
              backdropFilter: "blur(8px)",
              padding: "4px 8px",
              borderRadius: "20px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <span
              style={{
                width: "3px",
                height: "10px",
                background: "#10b981",
                borderRadius: "2px",
              }}
            />
            <span
              style={{
                width: "3px",
                height: "14px",
                background: "#10b981",
                borderRadius: "2px",
              }}
            />
            <span
              style={{
                width: "3px",
                height: "8px",
                background: "#10b981",
                borderRadius: "2px",
              }}
            />
          </div>
        )}
      </div>

      {/* BOTTOM CONTROL TOGGLE BAR */}
      <div
        style={{
          position: "absolute",
          bottom: "12px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "10px",
          background: "rgba(10, 10, 18, 0.85)",
          backdropFilter: "blur(12px)",
          padding: "6px 14px",
          borderRadius: "30px",
          border: "1px solid rgba(255, 255, 255, 0.15)",
        }}
      >
        <button
          type="button"
          onClick={onToggleCam}
          title={isCamOn ? "Turn Camera Off" : "Turn Camera On"}
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            border: "none",
            background: isCamOn ? "rgba(255, 255, 255, 0.12)" : "#ef4444",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
        >
          {isCamOn ? <Camera size={18} /> : <CameraOff size={18} />}
        </button>

        <button
          type="button"
          onClick={onToggleMic}
          title={isMicOn ? "Mute Microphone" : "Unmute Microphone"}
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            border: "none",
            background: isMicOn ? "rgba(255, 255, 255, 0.12)" : "#ef4444",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
        >
          {isMicOn ? <Mic size={18} /> : <MicOff size={18} />}
        </button>
      </div>
    </div>
  );
}
