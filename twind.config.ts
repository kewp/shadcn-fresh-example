import { defineConfig, Preset } from "twind";
import presetTailwind from "https://esm.sh/@twind/preset-tailwind@1.1.4";
import presetAutoprefix from "https://esm.sh/@twind/preset-autoprefix@1.0.7";

export default {
    ...defineConfig({
        presets: [presetTailwind() as Preset, presetAutoprefix()],
        theme: {
            extend: {
                colors: {
                    primary: {
                        DEFAULT: "hsl(var(--primary))",
                        foreground: "hsl(var(--primary-foreground))",
                    },
                    muted: {
                        DEFAULT: "hsl(var(--muted))",
                        foreground: "hsl(var(--muted-foreground))",
                    },
                },
            },
        },
    }),
    selfURL: import.meta.url,
};
