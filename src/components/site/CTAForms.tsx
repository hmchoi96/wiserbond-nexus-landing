"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function WaitlistForm(){
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  
  async function submit(e: React.FormEvent){
    e.preventDefault();
    if (!email || loading) return;
    
    setLoading(true);
    setStatus("idle");
    
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST", 
        headers: {"Content-Type": "application/json"}, 
        body: JSON.stringify({ 
          email,
          note,
          source: "landing",
          referrer: typeof window !== "undefined" ? document.referrer : ""
        }) 
      });
      
      const result = await response.json();
      
      if (result.ok) {
        setEmail("");
        setNote("");
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting waitlist:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }
  
  return (
    <form onSubmit={submit} className="space-y-3 w-full max-w-md">
      <Input 
        placeholder="work@company.com" 
        value={email} 
        onChange={e => setEmail(e.target.value)} 
        type="email"
        required
      />
      <Textarea 
        placeholder="팀/사용 맥락을 간단히 적어주세요 (선택)" 
        value={note} 
        onChange={e => setNote(e.target.value)} 
        rows={3}
        className="w-full"
      />
      <Button 
        type="submit"
        style={{ background: "var(--brand)" }}
        disabled={!email || loading}
        className="w-full"
      >
        {loading ? "Joining..." : "Join Waitlist"}
      </Button>
      {/* 허니팟 필드 */}
      <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />
      {status === "success" && <p className="text-green-600 text-sm">Added to waitlist!</p>}
      {status === "error" && <p className="text-red-600 text-sm">Please try again</p>}
    </form>
  );
}

export function DemoForm(){
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  
  async function submit(e: React.FormEvent){
    e.preventDefault();
    if (!email || loading) return;
    
    setLoading(true);
    setStatus("idle");
    
    try {
      const response = await fetch("/api/demo", {
        method: "POST", 
        headers: {"Content-Type": "application/json"}, 
        body: JSON.stringify({ email, note }) 
      });
      
      const result = await response.json();
      
      if (result.ok) {
        setEmail(""); 
        setNote("");
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting demo request:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }
  
  return (
    <form onSubmit={submit} className="space-y-3 w-full max-w-lg">
      <Input 
        placeholder="work@company.com" 
        value={email} 
        onChange={e => setEmail(e.target.value)} 
        type="email"
        required
      />
      <Textarea 
        className="w-full" 
        rows={4} 
        placeholder="팀/사용 맥락을 간단히 적어주세요" 
        value={note} 
        onChange={e => setNote(e.target.value)} 
      />
      <Button 
        type="submit"
        style={{ background: "var(--brand)" }}
        disabled={!email || loading}
      >
        {loading ? "Requesting..." : "Request Demo"}
      </Button>
      {/* 허니팟 필드 */}
      <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />
      {status === "success" && <p className="text-green-600 text-sm">Demo requested!</p>}
      {status === "error" && <p className="text-red-600 text-sm">Please try again</p>}
    </form>
  );
}
