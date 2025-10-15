export default function Submit() {
  return (
    <form className="bg-secondary p-4 rounded-xl flex flex-col">
      <div className="flex justify-evenly text-center">
        <div>
          <h3 className="mb-1">Type</h3>
          <div className="flex gap-2">
            <button>Opinion</button>
            <button>Pet Peeve</button>
          </div>
        </div>
        <div>
          <h3 className="mb-1">Category</h3>
          <div className="flex gap-2">
            <select className="bg-text text-primary">
              <option>Select Category</option>
              <option>Select Category</option>
              <option>Select Category</option>
            </select>
            <select className="bg-text text-primary">
              <option>Select Category</option>
              <option>Select Category</option>
              <option>Select Category</option>
            </select>
          </div>
        </div>
      </div>
      <h3 className="mb-1 mt-3">Handle</h3>
      <input type="text" placeholder="What do you want to be called in the thread?" />
      <div className="flex gap-2 items-center mt-2">
        <input type="checkbox" className="appearance-none w-4 h-4 rounded-sm bg-text checked:bg-tertiary border-2" />
        <label>Use profile handle</label>
      </div>
      <h3 className="mb-1 mt-3">Thought</h3>
      <input type="text" placeholder="What opinion or pet peeve do you have?" />
      <h3 className="mb-1 mt-3">Context</h3>
      <textarea rows={5} placeholder="Do you have anything to (respectfully) say about this opinion or pet peeve?"></textarea>
      <input type="submit" className="mt-4 mx-auto" />
    </form>
  );
}