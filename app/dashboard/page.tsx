"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getToken, getUser, clearAuth } from "@/lib/cookies";

interface User {
  id?: string;
  fullName?: string;
  email?: string;
}

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      router.push("/login");
      return;
    }
    const storedUser = getUser() as User | null;
    setUser(storedUser);
  }, [router]);

  const handleLogout = () => {
    clearAuth();
    router.push("/login");
  };

  const stats = [
    { label: "Schools Found",    value: "1,240", icon: "🏫", bg: "#dbeafe", color: "#1a56db" },
    { label: "Recommendations",  value: "38",    icon: "⭐", bg: "#fef9c3", color: "#ca8a04" },
    { label: "Saved Schools",    value: "12",    icon: "🔖", bg: "#dcfce7", color: "#16a34a" },
    { label: "Reviews Read",     value: "95",    icon: "📋", bg: "#fce7f3", color: "#db2777" },
  ];

  const schools = [
    { name: "Bal Mandir School",      location: "Kathmandu",    rating: 4.8, type: "Private"  },
    { name: "Budhanilkantha School",  location: "Budhanilkantha", rating: 4.9, type: "Boarding" },
    { name: "Rato Bangala School",    location: "Patan",        rating: 4.7, type: "Private"  },
    { name: "St. Xavier's School",    location: "Maitighar",    rating: 4.6, type: "Private"  },
  ];

  return (
    <div style={{ minHeight:"100vh", background:"#eef2ff", fontFamily:"'Inter',-apple-system,sans-serif" }}>

      {/* ── Navbar ── */}
      <nav style={{
        background:"#fff", borderBottom:"1px solid #e2e8f0",
        padding:"0 32px", height:"64px",
        display:"flex", alignItems:"center", justifyContent:"space-between",
        position:"sticky", top:0, zIndex:10,
        boxShadow:"0 1px 8px rgba(0,0,0,0.06)"
      }}>
        {/* Brand */}
        <div style={{ display:"flex", alignItems:"center", gap:"12px" }}>
          <img src="/logo.png" alt="Logo" style={{ width:"38px", height:"38px", objectFit:"contain" }} />
          <span style={{ fontWeight:800, fontSize:"1.1rem" }}>
            <span style={{ color:"#1e293b" }}>Sikhsha</span>
            <span style={{ color:"#1a56db" }}>Sathi</span>
          </span>
        </div>

        {/* User + logout */}
        <div style={{ display:"flex", alignItems:"center", gap:"14px" }}>
          <div style={{
            width:"38px", height:"38px", background:"#1a56db",
            borderRadius:"50%", display:"flex", alignItems:"center",
            justifyContent:"center", color:"#fff", fontWeight:700, fontSize:"1rem",
            flexShrink:0,
          }}>
            {user?.fullName?.charAt(0).toUpperCase() ?? "U"}
          </div>
          <div style={{ lineHeight:1.3 }}>
            <p style={{ margin:0, fontWeight:600, fontSize:"0.875rem", color:"#1e293b" }}>
              {user?.fullName ?? "User"}
            </p>
            <p style={{ margin:0, fontSize:"0.73rem", color:"#64748b" }}>
              {user?.email ?? ""}
            </p>
          </div>
          <button
            onClick={handleLogout}
            style={{
              padding:"7px 16px", background:"transparent",
              border:"1.5px solid #e2e8f0", borderRadius:"8px",
              fontSize:"0.84rem", fontWeight:600, color:"#64748b",
              cursor:"pointer", transition:"all 0.15s",
            }}
            onMouseOver={e => { const b = e.currentTarget; b.style.borderColor="#ef4444"; b.style.color="#ef4444"; }}
            onMouseOut={e  => { const b = e.currentTarget; b.style.borderColor="#e2e8f0"; b.style.color="#64748b";  }}
          >
            Logout
          </button>
        </div>
      </nav>

      {/* ── Main ── */}
      <main style={{ maxWidth:"1100px", margin:"0 auto", padding:"32px 24px" }}>

        {/* Welcome banner */}
        <div style={{
          background:"linear-gradient(135deg,#1a56db 0%,#1648c0 100%)",
          borderRadius:"16px", padding:"28px 32px", marginBottom:"24px",
          color:"#fff", display:"flex", alignItems:"center",
          justifyContent:"space-between", position:"relative", overflow:"hidden",
        }}>
          <div style={{
            position:"absolute", right:-30, top:-30,
            width:"200px", height:"200px", borderRadius:"50%",
            background:"rgba(255,255,255,0.06)", pointerEvents:"none",
          }}/>
          <div>
            <h1 style={{ margin:"0 0 6px", fontSize:"1.5rem", fontWeight:800 }}>
              Welcome back, {user?.fullName?.split(" ")[0] ?? "there"}! 👋
            </h1>
            <p style={{ margin:0, opacity:0.85, fontSize:"0.92rem" }}>
              Find the perfect school for a bright future.
            </p>
          </div>
          <button style={{
            background:"#fff", color:"#1a56db",
            padding:"10px 20px", borderRadius:"10px",
            fontWeight:700, fontSize:"0.875rem",
            border:"none", cursor:"pointer", flexShrink:0,
          }}>
            Find Schools →
          </button>
        </div>

        {/* Stats grid */}
        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",
          gap:"16px", marginBottom:"24px",
        }}>
          {stats.map(s => (
            <div key={s.label} style={{
              background:"#fff", borderRadius:"14px", padding:"20px",
              display:"flex", alignItems:"center", gap:"14px",
              boxShadow:"0 1px 6px rgba(0,0,0,0.05)",
            }}>
              <div style={{
                width:"48px", height:"48px", borderRadius:"12px",
                background:s.bg, display:"flex", alignItems:"center",
                justifyContent:"center", fontSize:"22px", flexShrink:0,
              }}>{s.icon}</div>
              <div>
                <p style={{ margin:"0 0 2px", fontSize:"1.4rem", fontWeight:800, color:s.color }}>{s.value}</p>
                <p style={{ margin:0, fontSize:"0.77rem", color:"#64748b", fontWeight:500 }}>{s.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* School list */}
        <div style={{
          background:"#fff", borderRadius:"16px", padding:"24px",
          boxShadow:"0 1px 6px rgba(0,0,0,0.05)",
        }}>
          <h2 style={{ margin:"0 0 18px", fontSize:"1rem", fontWeight:700, color:"#1e293b" }}>
            Top Recommended Schools
          </h2>
          <div style={{ display:"flex", flexDirection:"column", gap:"10px" }}>
            {schools.map((school, i) => (
              <div key={i} style={{
                display:"flex", alignItems:"center",
                justifyContent:"space-between",
                padding:"14px 16px", background:"#f8fafc",
                borderRadius:"10px", border:"1px solid #e2e8f0",
              }}>
                <div style={{ display:"flex", alignItems:"center", gap:"12px" }}>
                  <div style={{
                    width:"42px", height:"42px", background:"#dbeafe",
                    borderRadius:"10px", display:"flex",
                    alignItems:"center", justifyContent:"center", fontSize:"20px",
                  }}>🏫</div>
                  <div>
                    <p style={{ margin:0, fontWeight:600, fontSize:"0.9rem", color:"#1e293b" }}>{school.name}</p>
                    <p style={{ margin:0, fontSize:"0.76rem", color:"#64748b" }}>📍 {school.location}</p>
                  </div>
                </div>
                <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
                  <span style={{
                    padding:"3px 10px", background:"#dbeafe", color:"#1a56db",
                    borderRadius:"20px", fontSize:"0.73rem", fontWeight:600,
                  }}>{school.type}</span>
                  <span style={{ fontWeight:700, color:"#ca8a04", fontSize:"0.88rem" }}>⭐ {school.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}