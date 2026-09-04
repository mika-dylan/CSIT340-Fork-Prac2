export default function App() {
  return (
    <>
      <header className="max-w-2xl mx-auto px-6 pt-16">
    <h1 className="text-4xl font-semibold tracking-tight">Chad Ellie N. Sanchez</h1>
    <p className="mt-2 text-lg text-slate-600">Third year BSIT at Cebu Institute of Technology - University.</p>
    <hr className="mt-8 border-slate-200" />
  </header>

  <main className="max-w-2xl mx-auto px-6 py-10">

    <section className="mb-10">
      <h2 className="text-xl font-semibold mb-3">About</h2>
      <p className="leading-relaxed text-slate-700">
        I grew up from different places, we got from house to house because of personal
        reasons. Though, I picked IT because as someone who grew up playing a lot of games,
        I myself wants to recreate or at least make one myself. My progression as a
        programmer, is rather slow and not as competent but I'm working on that. So far,
        I am having fun meeting new people, and creating projects with them.
      </p>
    </section>

    <section className="mb-10">
      <h2 className="text-xl font-semibold mb-3">Details</h2>
      <p className="leading-relaxed text-slate-700">
        Course: BS Information Technology
        <br />
        Year level: Third year
        <br />
        Hometown: Lapu-Lapu, Agus
      </p>
    </section>

    <section className="mb-10">
      <h2 className="text-xl font-semibold mb-3">Things I like</h2>
      <ul className="list-disc list-inside space-y-1 text-slate-700">
        <li>Playing pickleball with my friends during weekends</li>
        <li>Playing an MMORPG every free time of mine with my friends</li>
        <li>Drinking coffee with coffee jelly, it's just a perfect pair</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3">Reach me</h2>
      <p className="leading-relaxed text-slate-700">
        chad9090monkey@gmail.com
        <br />
        chadellie.sanchez@cit.edu
        <br />
        @ellienanachi on most things
      </p>
    </section>

  </main>

  <section className="max-w-2xl mx-auto px-6 pb-16">
    <hr className="mb-6 border-slate-200" />
    <p className="text-sm text-slate-500">Made for CSIT340.</p>
  </section>
  </>
  );
}
