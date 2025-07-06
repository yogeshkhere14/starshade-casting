import { Button } from "./Button";

export default function OurWorkHome() {
  return (
    <div>
      <div className="mx-auto max-w-7xl lg:flex lg:items-center lg:justify-between">
        <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
          Ready to dive in?
          <br />
          Start your casting journey.
        </h2>
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:shrink-0">
          <Button
            type="submit"
            target="_blank"
            href={'https://forms.gle/pGbGfZitbG5QFi8m6'}
            className="w-full flex-none"
          >
            Apply for casting?
          </Button>
        </div>
      </div>
    </div>
  )
}
