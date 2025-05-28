import AutoComplete from "./components/AutoComplete";

export function Welcome() {
  return (
    <div>
      <h1 className="text-4xl font-bold mt-30 text-red-800 text-center">User Search</h1>
      <AutoComplete />
    </div>
  );
}

export default Welcome;