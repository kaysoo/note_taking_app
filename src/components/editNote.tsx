import { NoteData, Tag, useNote } from "../App";
import NoteForm from "./noteForm";

type EditNoteProps = {
  onSubmit: (id: string, data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
};

function EditNote({ onSubmit, availableTags, onAddTag }: EditNoteProps) {
  const note = useNote();
  return (
    <>
      <h1 className="mb-4">Edit Note</h1>
      <NoteForm
        title={note.title}
        markdown={note.markdown}
        tags={note.tags}
        availableTags={availableTags}
        onAddTag={onAddTag}
        onSubmit={(data) => onSubmit(note.id, data)}
      />
    </>
  );
}

export default EditNote;
