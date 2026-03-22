const openStyles = {
    // 1. LAYOUT & DISPLAY
    "hidden": { property: "display", value: "none" },
    "block": { property: "display", value: "block" },
    "inline-block": { property: "display", value: "inline-block" },
    "inline": { property: "display", value: "inline" },
    "flex": { property: "display", value: "flex" },
    "inline-flex": { property: "display", value: "inline-flex" },

    // Flex Direction
    "flex-row": { property: "flex-direction", value: "row" },
    "flex-col": { property: "flex-direction", value: "column" },
    "flex-row-reverse": { property: "flex-direction", value: "row-reverse" },
    "flex-col-reverse": { property: "flex-direction", value: "column-reverse" },

    // Flex Wrap
    "flex-wrap": { property: "flex-wrap", value: "wrap" },
    "flex-nowrap": { property: "flex-wrap", value: "nowrap" },
    "flex-wrap-reverse": { property: "flex-wrap", value: "wrap-reverse" },

    // Justify Content (Main Axis)
    "justify-start": { property: "justify-content", value: "flex-start" },
    "justify-end": { property: "justify-content", value: "flex-end" },
    "justify-center": { property: "justify-content", value: "center" },
    "justify-between": { property: "justify-content", value: "space-between" },
    "justify-around": { property: "justify-content", value: "space-around" },
    "justify-evenly": { property: "justify-content", value: "space-evenly" },

    // Align Items (Cross Axis)
    "items-start": { property: "align-items", value: "flex-start" },
    "items-end": { property: "align-items", value: "flex-end" },
    "items-center": { property: "align-items", value: "center" },
    "items-baseline": { property: "align-items", value: "baseline" },
    "items-stretch": { property: "align-items", value: "stretch" },

    // Gap (Using your 8px multiplier base)
    "gap-1": { property: "gap", value: "8px" },
    "gap-2": { property: "gap", value: "16px" },
    "gap-3": { property: "gap", value: "24px" },
    "gap-4": { property: "gap", value: "32px" },
    "gap-5": { property: "gap", value: "40px" },
    "gap-6": { property: "gap", value: "48px" },
    "gap-8": { property: "gap", value: "64px" },

    // 2. SPACING (Margins)
    "m-0": { property: "margin", value: "0px" },
    "m-1": { property: "margin", value: "8px" },
    "m-2": { property: "margin", value: "16px" },
    "m-3": { property: "margin", value: "24px" },
    "m-4": { property: "margin", value: "32px" },
    "m-5": { property: "margin", value: "40px" },
    "m-6": { property: "margin", value: "48px" },
    "m-8": { property: "margin", value: "64px" },
    "m-10": { property: "margin", value: "80px" },
    "m-12": { property: "margin", value: "96px" },

    // Directional Margins (Top, Bottom, Left, Right)
    "mt-2": { property: "margin-top", value: "16px" },
    "mb-2": { property: "margin-bottom", value: "16px" },
    "ml-2": { property: "margin-left", value: "16px" },
    "mr-2": { property: "margin-right", value: "16px" },
    "mt-4": { property: "margin-top", value: "32px" },
    "mb-4": { property: "margin-bottom", value: "32px" },
    "ml-4": { property: "margin-left", value: "32px" },
    "mr-4": { property: "margin-right", value: "32px" },

    // 3. SPACING (Padding)
    "p-0": { property: "padding", value: "0px" },
    "p-1": { property: "padding", value: "8px" },
    "p-2": { property: "padding", value: "16px" },
    "p-3": { property: "padding", value: "24px" },
    "p-4": { property: "padding", value: "32px" },
    "p-5": { property: "padding", value: "40px" },
    "p-6": { property: "padding", value: "48px" },
    "p-8": { property: "padding", value: "64px" },
    "p-10": { property: "padding", value: "80px" },
    "p-12": { property: "padding", value: "96px" },

    "pt-2": { property: "padding-top", value: "16px" },
    "pb-2": { property: "padding-bottom", value: "16px" },
    "pl-2": { property: "padding-left", value: "16px" },
    "pr-2": { property: "padding-right", value: "16px" },
    "pt-4": { property: "padding-top", value: "32px" },
    "pb-4": { property: "padding-bottom", value: "32px" },
    "pl-4": { property: "padding-left", value: "32px" },
    "pr-4": { property: "padding-right", value: "32px" },

    // 4. TYPOGRAPHY
    // Alignments
    "text-center": { property: "text-align", value: "center" },
    "text-right": { property: "text-align", value: "right" },
    "text-left": { property: "text-align", value: "left" },
    "text-justify": { property: "text-align", value: "justify" },

    // Font Sizes (Starting at 10px and scaling up proportionally)
    "text-10": { property: "font-size", value: "10px" },
    "text-12": { property: "font-size", value: "12px" },
    "text-14": { property: "font-size", value: "14px" },
    "text-16": { property: "font-size", value: "16px" },
    "text-18": { property: "font-size", value: "18px" },
    "text-20": { property: "font-size", value: "20px" },
    "text-24": { property: "font-size", value: "24px" },
    "text-28": { property: "font-size", value: "28px" },
    "text-32": { property: "font-size", value: "32px" },
    "text-36": { property: "font-size", value: "36px" },
    "text-40": { property: "font-size", value: "40px" },
    "text-48": { property: "font-size", value: "48px" },
    "text-56": { property: "font-size", value: "56px" },
    "text-64": { property: "font-size", value: "64px" },
    "text-72": { property: "font-size", value: "72px" },
    "text-96": { property: "font-size", value: "96px" },

    // 5. BORDERS & RADIUS (Curves)
    // Border Styles (Required for borders to be visible!)
    "border-solid": { property: "border-style", value: "solid" },
    "border-dashed": { property: "border-style", value: "dashed" },
    "border-dotted": { property: "border-style", value: "dotted" },
    "border-none": { property: "border-style", value: "none" },

    // Border Widths
    "border-0": { property: "border-width", value: "0px" },
    "border-1": { property: "border-width", value: "1px" },
    "border-2": { property: "border-width", value: "2px" },
    "border-4": { property: "border-width", value: "4px" },
    "border-6": { property: "border-width", value: "6px" },
    "border-8": { property: "border-width", value: "8px" },

    // Curves (Border Radius)
    "curved-none": { property: "border-radius", value: "0px" },
    "curved-sm": { property: "border-radius", value: "4px" },
    "curved": { property: "border-radius", value: "8px" },     // Base curve
    "curved-md": { property: "border-radius", value: "12px" },
    "curved-lg": { property: "border-radius", value: "16px" },
    "curved-xl": { property: "border-radius", value: "24px" },
    "curved-2xl": { property: "border-radius", value: "32px" },
    "curved-full": { property: "border-radius", value: "9999px" }, // Pill shape
    "curved-circle": { property: "border-radius", value: "50%" },  // Perfect circle

    // 6. COLORS (Backgrounds)
    "bg-transparent": { property: "background-color", value: "transparent" },
    "bg-white": { property: "background-color", value: "#ffffff" },
    "bg-black": { property: "background-color", value: "#000000" },

    // Core Theme
    "bg-chai": { property: "background-color", value: "#c57e3c" },
    "bg-beige": { property: "background-color", value: "#f5f5dc" },
    "bg-earthy": { property: "background-color", value: "#8b5a2b" },
    "bg-darkbrown": { property: "background-color", value: "#3e2723" },

    // Modern Rainbow Palette
    "bg-slate": { property: "background-color", value: "#64748b" },
    "bg-gray": { property: "background-color", value: "#6b7280" },
    "bg-zinc": { property: "background-color", value: "#71717a" },
    "bg-red": { property: "background-color", value: "#ef4444" },
    "bg-orange": { property: "background-color", value: "#f97316" },
    "bg-amber": { property: "background-color", value: "#f59e0b" },
    "bg-yellow": { property: "background-color", value: "#eab308" },
    "bg-green": { property: "background-color", value: "#22c55e" },
    "bg-emerald": { property: "background-color", value: "#10b981" },
    "bg-teal": { property: "background-color", value: "#14b8a6" },
    "bg-cyan": { property: "background-color", value: "#06b6d4" },
    "bg-blue": { property: "background-color", value: "#3b82f6" },
    "bg-indigo": { property: "background-color", value: "#6366f1" },
    "bg-violet": { property: "background-color", value: "#8b5cf6" },
    "bg-purple": { property: "background-color", value: "#a855f7" },
    "bg-pink": { property: "background-color", value: "#ec4899" },
    "bg-rose": { property: "background-color", value: "#f43f5e" },

    // 7. COLORS (Text)
    "text-transparent": { property: "color", value: "transparent" },
    "text-white": { property: "color", value: "#ffffff" },
    "text-black": { property: "color", value: "#000000" },

    // Core Theme
    "text-chai": { property: "color", value: "#c57e3c" },
    "text-beige": { property: "color", value: "#f5f5dc" },
    "text-earthy": { property: "color", value: "#8b5a2b" },
    "text-darkbrown": { property: "color", value: "#3e2723" },

    // Modern Rainbow Palette
    "text-slate": { property: "color", value: "#64748b" },
    "text-gray": { property: "color", value: "#6b7280" },
    "text-zinc": { property: "color", value: "#71717a" },
    "text-red": { property: "color", value: "#ef4444" },
    "text-orange": { property: "color", value: "#f97316" },
    "text-amber": { property: "color", value: "#f59e0b" },
    "text-yellow": { property: "color", value: "#eab308" },
    "text-green": { property: "color", value: "#22c55e" },
    "text-emerald": { property: "color", value: "#10b981" },
    "text-teal": { property: "color", value: "#14b8a6" },
    "text-cyan": { property: "color", value: "#06b6d4" },
    "text-blue": { property: "color", value: "#3b82f6" },
    "text-indigo": { property: "color", value: "#6366f1" },
    "text-violet": { property: "color", value: "#8b5cf6" },
    "text-purple": { property: "color", value: "#a855f7" },
    "text-pink": { property: "color", value: "#ec4899" },
    "text-rose": { property: "color", value: "#f43f5e" }
};

function paintWebpage(){
    let cssFrameworkName = "open";
    const allElements = document.querySelectorAll(`[class*="${cssFrameworkName}-"]`);//Nodelist
    console.log(allElements);
    allElements.forEach(node => {
        // console.log(elem)
        // console.log(node.classList)
        node.classList.forEach(currClass => {
            // console.log(currClass);
            if (currClass.startsWith(`${cssFrameworkName}-`)) {
                let styleKey = currClass.slice(cssFrameworkName.length + 1,);
                // console.log(styleKey);
                if (openStyles[styleKey]) {
                    node.style[openStyles[styleKey].property] = openStyles[styleKey].value
                }
            }
        })
    })
}


document.addEventListener("DOMContentLoaded",paintWebpage)













