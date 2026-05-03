"use client";

import { Spinner } from "@/components/ui/spinner";
import { useEffect, useState } from "react";

export default function Loading() {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (!show) return null;

    return (
        <div className="flex items-center justify-center h-screen">
            <Spinner className="w-8 h-8" />
        </div>
    );
}