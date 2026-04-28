import { Link } from "react-router";
import { HelpCircle } from "lucide-react";

export default function LandingFooter() {
  return (
    <footer className="border-t border-border bg-secondary/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-2 group">
            <HelpCircle className="w-5 h-5 text-primary transition-transform group-hover:rotate-12" />
            <span className="font-playfair text-base font-semibold text-foreground">
              Is It Worth It?
            </span>
          </Link>

          <nav className="flex items-center gap-6 text-sm font-inter text-muted-foreground">
            <button
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-foreground transition-colors bg-transparent border-none cursor-pointer"
            >
              How It Works
            </button>
            <Link to="/app" className="hover:text-foreground transition-colors">
              Calculator
            </Link>
          </nav>

          <p className="text-sm text-muted-foreground font-inter">
            © {new Date().getFullYear()} Is It Worth It? —{" "}
            <a
              href="https://www.terabyte.africa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Made by Terabyte
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
