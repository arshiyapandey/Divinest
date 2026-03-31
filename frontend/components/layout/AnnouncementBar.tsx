"use client";

export default function AnnouncementBar() {
  return (
    <div className="w-full bg-primary text-white flex items-center justify-center h-10 text-sm shadow-sm">
      <p className="flex items-center gap-2">
        <span className="text-secondary text-base">●</span>
        <span className="font-medium tracking-wide">
         <b> All prepaid orders are dispatched the same day</b>
        </span>
        
         <span className="text-secondary text-base">●</span>
        <span className="hidden sm:inline text-secondary text-xs">
        <b>  Fast & Reliable Delivery</b>
        </span>
      </p>
    </div>
  );
}