function getTime(time){
    const hour = parseInt (time/3600);
    let second = time%3600;
    let minute = parseInt (second/60);
    second = second%60;
    return `${hour}hrs ${minute}mins ${second}secs ago`;
}

const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json())
        .then(data => displayCategories(data.categories)
        )
        .catch(error => console.error(error)
        )
}

const loadVideos = (searchText = "") => {
    fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchText}`)
        .then(res => res.json())
        .then(data => displayVideos(data.videos))
        .catch(error => console.error(error)
        )
}

const loadCategoryVideos = (id) =>{
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
        .then(res => res.json())
        .then(data => {
            removeActiveClass();
            const activeBtn = document.getElementById(`btn-${id}`);
            activeBtn.classList.add("active");
            displayVideos(data.category)
        })
        .catch(error => console.error(error)
        )
}
const loadDetails = async(videoId) =>{
       console.log(videoId);
       const uri = `https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`;
       const res = await fetch(uri);
       const data = await res.json();
       displayDetails(data.video);
       
}

const displayDetails = (video) => {
    console.log(video);
    const detailContainer = document.getElementById('modal-content');
    detailContainer.innerHTML = `
        <img src=${video.thumbnail} />
        <p>${video.description}</p>
    `;
    // document.getElementById("showModalData").click();
    document.getElementById("customModal").showModal();
}

const removeActiveClass = () => {
    const buttons = document.getElementsByClassName('category-btn');
    for(let btn of buttons){
        btn.classList.remove("active");
    }
}
const displayCategories = (categories) => {
    const categoryContainer = document.getElementById('categories');
    categories.forEach(item => {
        console.log(item);
        const buttonContainer = document.createElement('div');
        buttonContainer.innerHTML = `
            <button id="btn-${item.category_id}" onclick="loadCategoryVideos(${item.category_id})" class="btn category-btn">${item.category}</button>
        `
        categoryContainer.append(buttonContainer);
    });
}



const displayVideos = (videos) => {
    const videoContainer = document.getElementById('videos');
    videoContainer.innerHTML = "";

    if(videos.length == 0){
        videoContainer.classList.remove("grid");
        videoContainer.innerHTML = `
            <div class="min-h-[300px] flex flex-col gap-5 justify-center items-center">
                <img src="./assets/Icon.png" alt="">
            </div>
            <h2 class="text-center text-xl font-bold">No content available in this category</h2>
        `;
        return;
    }else{
        videoContainer.classList.add("grid");
    }

    videos.forEach(video => {
        console.log(video);
        const card = document.createElement('div');
        card.classList = "card bg-base-100";
        card.innerHTML = `
                <figure class="h-[200px] relative">
                    <img class="h-full w-full object-cover"
                    src=${video.thumbnail}
                    alt="Shoes" />

                    ${video.others.posted_date?.length==0 ? "" : `<span class="text-xs absolute right-2 bottom-2 bg-black text-white p-1 rounded">${getTime(video.others.posted_date)}</span>`
                    }
                    
                </figure>
                <div class="px-0 py-2 flex gap-2">
                    <div>
                        <img class="h-10 w-10 rounded-full object-cover" src=${video.authors[0].profile_picture} alt="">
                    </div>
                    <div>
                        <h2 class="font-bold">${video.title}</h2>
                        <div class="flex items-center gap-2">
                            <p class="text-gray-400">${video.authors[0].profile_name}</p>
                            
                            ${video.authors[0].verified == true ? '<img class="w-5" src="https://img.icons8.com/?size=96&id=98A4yZTt9abw&format=png" alt="">' : ""}

                        </div>
                        <p></p>
                    </div>
                </div>
                <div>
                    <p><button onclick="loadDetails('${video.video_id}')" class="btn btn-sm btn-error">Details</button></p>
                </div>
        `
        videoContainer.append(card);
    })
}


document.getElementById("search-input").addEventListener("keyup", (e) => {
    loadVideos(e.target.value); 
})

loadCategories();
loadVideos();


const cardDemo = 
{
    "category_id": "1001",
    "video_id": "aaag",
    "thumbnail": "https://i.ibb.co/DRxB1Wm/sunris.jpg",
    "title": "Sunrise Reverie",
    "authors": [
        {
            "profile_picture": "https://i.ibb.co/yQFJ42h/ava.jpg",
            "profile_name": "Ava Johnson",
            "verified": false
        }
    ],
    "others": {
        "views": "1.1K",
        "posted_date": "16950"
    },
    "description": "'Sunrise Reverie' by Ava Johnson takes listeners on a serene journey through tranquil melodies and soft harmonies. With 1.1K views, this track is perfect for morning relaxation or an evening wind-down. Ava's heartfelt lyrics and soothing voice create a sense of peace, making it a go-to for fans seeking calm and inspiration in their musical choices."
}