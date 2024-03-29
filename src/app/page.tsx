
export default function Home() {
  return (
    <main
      className="h-screen w-full p-1 overflow-y-hidden"
    >
      <div className="bg-secondary h-full w-full rounded-2xl flex flex-col justify-center items-center gap-5">
        <div className="text-2xl font-bold">Calender</div>
        <iframe src="https://calendar.google.com/calendar/embed?height=300&wkst=1&ctz=UTC&bgcolor=%23ffffff&showTitle=0&showPrint=0&showCalendars=0&showTz=0&showTabs=0&src=ZGViYW5hbmQxMTAxQGdtYWlsLmNvbQ&color=%23039BE5" className="border-2 border-double border-ternary p-1 rounded-lg shadow-2xl shadow-primary hover:h-[500px] hover:w-[500px] "  width="300" height="300"></iframe>
      </div>
    </main>
  );
}
