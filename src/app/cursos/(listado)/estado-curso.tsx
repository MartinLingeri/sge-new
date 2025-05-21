import { Badge } from "@/components/ui/badge";
import { type RouterOutputs } from "@/trpc/react";

type EstadoType = RouterOutputs["cursos"]["getAll"]["cursos"][number]; // ["disponible"];todo: fix

type RemoveCursoModalProps = {
  cursoId: number;
  estado: EstadoType;
};

export default function EstadoCurso({ estado }: RemoveCursoModalProps) {
  if (!estado) {
    return (
      <Badge variant={"default"} color={"danger"}>
        Prestado
      </Badge>
    );
  }

  return (
    <Badge variant={"default"} color={"success"}>
      Disponible
    </Badge>
  );
}
