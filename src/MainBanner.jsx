
const MainBanner = () => {
    return (
        <main className="flex flex-col lg:flex-row h-[90vh] text-highlight">
            <div className="h-3/4 lg:h-full lg:w-1/2 bg-slate-700 flex flex-col justify-center items-center">
                <h1 className="text-3xl lg:text-4xl mb-5">Experience the Thrill</h1>
                <p>Ride Fast. Ride Hard. Ride Safe.</p>
            </div>

            <img src="https://images.unsplash.com/photo-1558981285-6f0c94958bb6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        </main>
    )
}

export default MainBanner