import styles from "./submit.module.css";

export default function Submit() {
  return (
    <>
      <form className={styles.form}>
        <div>
          <div>
            <h3>Type</h3>
            <div>
              <button>Opinions</button>
              <button>Pet Peeves</button>
            </div>
          </div>
          <div>
            <h3>Category</h3>
            <div>
              <select>
                <option>Select Category</option>
                <option>Select Category</option>
                <option>Select Category</option>
              </select>
              <select>
                <option>Select Category</option>
                <option>Select Category</option>
                <option>Select Category</option>
              </select>
            </div>
          </div>
        </div>
        <h3>Handle</h3>
        {/*Names are automatically generated except for premium custom names*/}
        <input type="text" maxLength={25} placeholder="What do you want to be called in the thread? (max: 25)" />
        <div>
          <input type="checkbox" />
          <label>Use profile handle</label>
        </div>
        <h3>Thought</h3>
        <input type="text" maxLength={75} placeholder="What opinion or pet peeve do you have? (max: 75)" />
        <h3>Context</h3>
        <textarea rows={5} maxLength={500} placeholder="Do you have anything to (respectfully) say about this opinion or pet peeve? (max: 500)"></textarea>
        <input type="submit" />
      </form>
    </>
  );
}