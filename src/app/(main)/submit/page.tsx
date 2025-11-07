export default function Submit() {
  return (
    <form className="box flex flex-col">
      <div className="flex justify-evenly text-center flex-wrap gap-4">
        <div>
          <h3 className="mb-1">Type</h3>
          <div className="flex flex-wrap justify-center gap-2">
            <button className="hover:bg-unpopular">Opinion</button>
            <button className="hover:bg-popular">Pet Peeve</button>
          </div>
        </div>
        <div>
          <h3 className="mb-1">Category</h3>
          <div className="flex flex-wrap justify-center gap-2">
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