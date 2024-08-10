import { NoteData, Tag } from "../App";
import NoteForm from "./noteForm";

type NewNoteProps = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
};

function NewNote({ onSubmit, availableTags, onAddTag }: NewNoteProps) {
  return (
    <>
      <h1 className="mb-4">New Note</h1>
      <NoteForm
        availableTags={availableTags}
        onAddTag={onAddTag}
        onSubmit={onSubmit}
      />
    </>
  );
}

export default NewNote;
