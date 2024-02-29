const dataLoad = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
    const data = await res.json();
    showData(data.data);
}

const showData = (data) => {
    const mainContainer = document.getElementById('object-container');
    const tools = data.tools;

    tools.splice(0, 6);

    tools.forEach(tool => {
        const div = document.createElement('div');

        div.innerHTML = `
        <div class="flex flex-col gap-4 p-6 border border-gray-300 rounded-xl">
        <div class="h-[10vw]">
        <img class="rounded-xl object-cover" src="${tool.image}" alt="">
        </div>
        <h1 class="text-[#111111] text-[25px] font-semibold">
            Features
        </h1>
        <p class="text-[#585858]">
            1.Natural language processing
            <br>2.Contextual understanding
            <br>3.Text generation
        </p>
        <hr>
        <div class="flex justify-between items-center">
            <div>
                <h1 class="text-[#111111] text-[25px] font-semibold">
                    ${tool.name}
                </h1>
                <p class="text-[#585858] font-medium pt-4">
                    <span><i class="fa-regular fa-calendar-days mr-2"></i>  ${tool.published_in}</span>
                </p>
            </div>
            <button class="rounded-full bg-[#FEF7F7] text-2xl hover:bg-[#FEC7F7] duration-300 text-[#EB5757]">
                <i class="fa-solid fa-arrow-right p-4"></i>
            </button>
        </div>
    </div>
    `
        mainContainer.appendChild(div)
    });
}







dataLoad();