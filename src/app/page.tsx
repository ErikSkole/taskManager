import Link from "next/link"

// Components
import Task from "./components/task/Task";


export default function Home() {
  return (
    <main className="flex p-8">
      <div className="taskCol openCol basis-1/3">
        <Link href="/task">
          <Task />
        </Link>
        <Link href="/task">
          <Task />
        </Link>
        <Link href="/task">
          <Task />
        </Link>
        <Link href="/task">
          <Task />
        </Link>
      </div>
      <div className="taskCol wipCol basis-1/3">

      </div>
      <div className="taskCol doneCol basis-1/3">

      </div>
    </main>
  );
}
