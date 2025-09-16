"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function WaitlistForm(){
  const [email, setEmail] = useState("");
  
  async function submit(){
    try {
      await fetch("/api/lead", {
        method: "POST", 
        headers: {"Content-Type": "application/json"}, 
        body: JSON.stringify({ type: "waitlist", email }) 
      });
      setEmail("");
      alert("Added to waitlist.");
    } catch (error) {
      console.error("Error submitting waitlist:", error);
      alert("Error submitting. Please try again.");
    }
  }
  
  return (
    <div className="flex gap-2 w-full max-w-md">
      <Input 
        placeholder="work@company.com" 
        value={email} 
        onChange={e => setEmail(e.target.value)} 
        type="email"
      />
      <Button 
        onClick={submit} 
        style={{ background: "var(--brand)" }}
        disabled={!email}
      >
        Join
      </Button>
    </div>
  );
}

export function DemoForm(){
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  
  async function submit(){
    try {
      await fetch("/api/lead", {
        method: "POST", 
        headers: {"Content-Type": "application/json"}, 
        body: JSON.stringify({ type: "demo", email, note }) 
      });
      setEmail(""); 
      setNote("");
      alert("Demo requested.");
    } catch (error) {
      console.error("Error submitting demo request:", error);
      alert("Error submitting. Please try again.");
    }
  }
  
  return (
    <div className="space-y-3 w-full max-w-lg">
      <Input 
        placeholder="work@company.com" 
        value={email} 
        onChange={e => setEmail(e.target.value)} 
        type="email"
      />
      <Textarea 
        className="w-full" 
        rows={4} 
        placeholder="팀/사용 맥락을 간단히 적어주세요" 
        value={note} 
        onChange={e => setNote(e.target.value)} 
      />
      <Button 
        onClick={submit} 
        style={{ background: "var(--brand)" }}
        disabled={!email}
      >
        Request Demo
      </Button>
    </div>
  );
}
