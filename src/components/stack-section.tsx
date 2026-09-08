import { DATA } from "@/data/resume";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge } from "@/components/ui/badge";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import type { IconProps } from "@/components/icons";

type StackSkill = {
  name: string;
  icon?: IconDefinition;
  customIcon?: React.ComponentType<IconProps>;
};

function SkillBadge({ skill }: { skill: StackSkill }) {
  return (
    <Badge
      variant="secondary"
      className="inline-flex items-center gap-1.5 border border-border/50 px-3 py-1.5 text-sm"
    >
      {"customIcon" in skill && skill.customIcon ? (
        <skill.customIcon className="size-4" />
      ) : skill.icon ? (
        <FontAwesomeIcon icon={skill.icon} className="size-4" />
      ) : null}
      {skill.name}
    </Badge>
  );
}

export function StackSection() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {DATA.stackCategories.map((category) => (
        <div
          key={category.title}
          className="rounded-xl border border-border/50 bg-card/30 p-4"
        >
          <h3 className="text-sm font-semibold tracking-tight">
            {category.title}
          </h3>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            {category.description}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <SkillBadge key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
