export default function Score() {
  return (
    <>
      <h2 className="text-center">Unpopular Score</h2>
      <i className="text-center">A pie chart of a user's popular and unpopular opinions and pet peeves will be here.</i>
      <ul>
        <li className="uppercase flex items-end gap-1 leading-none">Opinions<hr/>00%</li>
        <ul className="ml-4">
          <li className="flex items-end gap-1 leading-none mt-2">#Category<hr/>00%</li>
          <li className="flex items-end gap-1 leading-none mt-2">#Category<hr/>00%</li>
          <li className="flex items-end gap-1 leading-none mt-2">#Category<hr/>00%</li>
        </ul>
        <li className="uppercase mt-8 flex items-end gap-1 leading-none">Pet Peeves<hr/>00%</li>
        <ul className="ml-4">
          <li className="flex items-end gap-1 leading-none mt-2">#Category<hr/>00%</li>
          <li className="flex items-end gap-1 leading-none mt-2">#Category<hr/>00%</li>
          <li className="flex items-end gap-1 leading-none mt-2">#Category<hr/>00%</li>
        </ul>
      </ul>
    </>
  );
}