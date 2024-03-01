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
        <div class=" rounded-xl">
        <img class="rounded-xl object-cover" src="${tool.image}" alt="404 img-not found">

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
            <button onclick="showModal('${tool.id}')"  class="rounded-full bg-[#FEF7F7] text-2xl hover:bg-[#FEC7F7] duration-300 text-[#EB5757]">
                <i class="fa-solid fa-arrow-right p-4"></i>
            </button>
        </div>
    </div>
    `
        mainContainer.appendChild(div)
    });
}


const showModal = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`);
    const data = await res.json();

    const details = data.data;

    const container = document.getElementById('modal-box');

    container.innerHTML = '';

    const div = document.createElement('div');
    div.innerHTML = `
    <div class="relative w-full mx-auto flex flex-col gap-4 border  border-gray-300 p-4  bg-white rounded-2xl">
            <div class="flex-1 space-y-2 border border-[#EB5757] rounded-2xl p-4 bg-[#EB57570D]">
                <p class="text-[25px] font-semibold text-[#111]">
                    ${details.use_cases[0].description}
                </p>
                <div class="flex justify-between">
                    <h1 class="flex items-center justify-center max-w-[90px] p-4 bg-white font-bold text-center rounded-2xl text-[#03A30A]">
                        $10/ month
                        Basic
                    </h1>
                    <h1 class="flex items-center justify-center max-w-[90px] p-4 bg-white font-bold text-center rounded-2xl text-[#F28927]">
                        $50/ <br> month <br>
                        Pro
                    </h1>
                    <h1 class="flex items-center justify-center max-w-[90px] p-4 bg-white font-bold text-center rounded-2xl text-[#EB5757]">
                        Contact <br>
                        us <br>
                        Enterprise
                    </h1>
                </div>
                <div class="flex justify-between">
                    <div class="space-y-4">
                        <h1 class="text-[25px] font-semibold text-[#111]">
                            Features
                        </h1>
                        <p class="text-[#585858]">
                            Customizable responses
                            Multilingual support
                            Seamless integration
                        </p>
                    </div>
                    <div class="space-y-4">
                        <h1 class="text-[25px] font-semibold text-[#111]">
                            Features
                        </h1>
                        <p class="text-[#585858]">
                            Customizable responses
                            Multilingual support
                            Seamless integration
                        </p>
                    </div>
                </div>
            </div>
            <div class="flex-1 border border-[#E7E7E7] p-4 rounded-2xl bg-white text-center space-y-4">
                <div class="relative">
                    <img src="${details.image_link}" alt="">
                    <p class="absolute  px-4 py-1 rounded-xl font-semibold bg-[#EB5757] text-white  top-[4%] right-[2%]">
                        ${details.accuracy.score}% accuracy
                    </p>
                </div>
                <h1 class="text-[25px] font-semibold text-[#111] text-center">
                    Hi, how are you doing today?
                </h1>
                <p class="text-[#585858]">
                    I'm doing well, thank you for asking. How can I assist you today?

                </p>
            </div>
            
        </div>
    `

    container.append(div);

    my_modal_3.showModal();


}






dataLoad();