import CSharpLogo from '$lib/assets/skills/csharp.svg';
import LaravelLogo from '$lib/assets/skills/laravel.svg';
import LuaLogo from '$lib/assets/skills/lua.svg';
import TypeScriptLogo from '$lib/assets/skills/typescript.svg';
import SvelteKitLogo from '$lib/assets/skills/svelte.svg';

type SkillIcon = string;
type SkillName = string;

type Skill = {
    name: SkillName;
    icon: SkillIcon;
};

const skills: Skill[] = [
    { name: 'Laravel', icon: LaravelLogo },
    { name: 'SvelteKit', icon: SvelteKitLogo },
    { name: 'TypeScript', icon: TypeScriptLogo },
    { name: 'C#', icon: CSharpLogo },
    { name: 'Lua', icon: LuaLogo },
];

export default skills;
export type {
    SkillIcon,
    SkillName,
    Skill
};
