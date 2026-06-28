"""
Generate HERO-001 responsive assets from source PNG.
Recovers valid PNG from git if hero-observatory-4k.png is missing.
"""
from __future__ import annotations

import subprocess
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
HERO_DIR = ROOT / "public" / "images" / "hero"
ASSETS_HERO_DIR = ROOT / "public" / "assets" / "hero"
SOURCE_GIT = "c025e24:public/ChatGPT Image 28 de jun. de 2026, 14_21_57.png"
DESKTOP_MAX = 2400
MOBILE_MAX = 1200
MOBILE_RATIO = 9 / 16


def extract_source_png() -> Image.Image:
    source_path = HERO_DIR / "hero-observatory-4k.png"
    if source_path.exists():
        img = Image.open(source_path)
        img.load()
        return img.convert("RGB")

    result = subprocess.run(
        ["git", "show", SOURCE_GIT],
        capture_output=True,
        check=True,
        cwd=ROOT,
    )
    img = Image.open(__import__("io").BytesIO(result.stdout))
    img.load()
    return img.convert("RGB")


def resize_width(img: Image.Image, max_width: int) -> Image.Image:
    w, h = img.size
    if w <= max_width:
        return img.copy()
    new_h = int(h * max_width / w)
    return img.resize((max_width, new_h), Image.Resampling.LANCZOS)


def crop_mobile(img: Image.Image) -> Image.Image:
    w, h = img.size
    current = w / h
    if current > MOBILE_RATIO:
        new_w = int(h * MOBILE_RATIO)
        left = (w - new_w) // 2
        box = (left, 0, left + new_w, h)
    else:
        new_h = int(w / MOBILE_RATIO)
        top = max((h - new_h) // 3, 0)
        box = (0, top, w, min(top + new_h, h))
    return img.crop(box)


def save_webp(img: Image.Image, path: Path, quality: int = 88) -> None:
    img.save(path, "WEBP", quality=quality, method=6)


def save_png(img: Image.Image, path: Path) -> None:
    img.save(path, "PNG", optimize=True)


def main() -> None:
    HERO_DIR.mkdir(parents=True, exist_ok=True)
    ASSETS_HERO_DIR.mkdir(parents=True, exist_ok=True)

    source = extract_source_png()
    print(f"Source: {source.size}")

    save_png(source, HERO_DIR / "hero-observatory-4k.png")

    desktop = resize_width(source, DESKTOP_MAX)
    mobile = resize_width(crop_mobile(source), MOBILE_MAX)

    save_png(desktop, HERO_DIR / "hero-observatory-desktop.png")
    save_png(mobile, HERO_DIR / "hero-observatory-mobile.png")

    save_webp(desktop, HERO_DIR / "hero-observatory-desktop.webp")
    save_webp(mobile, HERO_DIR / "hero-observatory-mobile.webp")

    save_png(desktop, ASSETS_HERO_DIR / "hero-observatory-desktop.png")
    save_webp(desktop, ASSETS_HERO_DIR / "hero-observatory-desktop.webp")

    for name, img in [
        ("4k.png", source),
        ("desktop.png", desktop),
        ("mobile.png", mobile),
        ("desktop.webp", desktop),
        ("mobile.webp", mobile),
    ]:
        path = HERO_DIR / f"hero-observatory-{name.replace('.png', '').replace('.webp', '')}"
        if "4k" in name:
            path = HERO_DIR / "hero-observatory-4k.png"
        elif "desktop" in name and name.endswith("png"):
            path = HERO_DIR / "hero-observatory-desktop.png"
        elif "mobile" in name and name.endswith("png"):
            path = HERO_DIR / "hero-observatory-mobile.png"
        elif "desktop" in name and name.endswith("webp"):
            path = HERO_DIR / "hero-observatory-desktop.webp"
        elif "mobile" in name and name.endswith("webp"):
            path = HERO_DIR / "hero-observatory-mobile.webp"
        size = path.stat().st_size if path.exists() else 0
        print(f"  {path.name}: {img.size} — {size // 1024}KB")


if __name__ == "__main__":
    main()
