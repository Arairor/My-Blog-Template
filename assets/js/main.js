/**
 * Menu Drop Down
 * @link http://arairor.com
 */

function select(value){
    return document.querySelector(value);
}
function selectAll(value){
    return document.querySelectorAll(value);
}
function focusClear(value){
    value.onfocus = () =>{
        value.value = ''
    }
}

const menuButton = select('#menu-tab'),
      menuTab = select('#menu');

      menuButton.addEventListener('click',()=>{
          menuTab.classList.toggle('active');
      })

/**
 * blog-data
 * @link http://arairor.com
 */

 const blogData = {
    data: [
        {
            titleName: "Graphic Design Toolkit",
            userName: "Admin",
            date: "2021-12-02  : 07.00",
            category: "Graphic",
            image: "1.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            blogId: "000001"
        },
        {
            titleName: "Creative Design",
            userName: "Tiffuny",
            date: "92021-12-09  : 14.00",
            category: "Graphic",
            image: "2.jpg",
            description: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
            blogId: "000002"
        },
        {
            titleName: "Bussiness Million",
            userName: "Cola",
            date: "2021-12-02  : 15.00",
            category: "Bussiness",
            image: "3.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            blogId: "000003"
        },
        {
            titleName: "Financial Planning",
            userName: "Caba Admin",
            date: "2021-12-08  : 16.00",
            category: "Bussiness",
            image: "4.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            blogId: "000004"
        },
        {
            titleName: "Planning Meeting",
            userName: "Admin",
            date: "2021-12-09  : 15.00น.",
            category: "Bussiness",
            image: "bussiness_team.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            blogId: "000005"
        }
    ]
}
/** =========================================================== Control Javascript ================================================ **/
/**
 * Import Data to index.html And Pagination
 * @link http://arairor.com
 */

 const blogItems = select('#data-content'),
       paginationBtn = select('#pagination');

    let currentPage = 1;
    let rows = 3;

    displayContent(blogItems, blogData.data, rows, currentPage);
    setPagination(paginationBtn, blogData.data, rows);

/**
 * Function
 * @link http://arairor.com
 */

function select(value){
    return document.querySelector(value)
}
function selectAll(value){
    return document.querySelectorAll(value)
}
function focusClear(value){
    value.onfocus = () =>{
        value.value = ''
    }
}

//displayContent
function displayContent(element, data, rowPerPage, page){
    element.innerHTML = ""
    page--

    let start = rowPerPage * page
    let end = start + rowPerPage
    let paginationItems = data.slice(start, end)
    for(let i=0; i<paginationItems.length; i++){
        element.innerHTML += createContent(paginationItems[i])
    }
}

//setPagination
function setPagination(element, data, rowsPerPage){
    element.innerHTML = ""

    let countPage = Math.ceil(data.length / rowsPerPage)
    for(let i=1; i<countPage + 1; i++){
        let btn = createBtn(i, blogData.data)
        element.appendChild(btn)
    }
}

// create button
function createBtn(page, data){

    let button = document.createElement('button')
    button.classList.add('btn-pagination', 'text-pagination')
    button.innerText = page

    if(currentPage == page) button.classList.add('page-active')
    
    button.onclick = ()=>{
        currentPage = page;
        displayContent(blogItems, data, rows, currentPage)

        let currentBtn = select('.pagination button.page-active')
        currentBtn.classList.remove('page-active')

        button.classList.add('page-active')
    }

    return button
}

//create content
function createContent(data){
    let blogContent = document.createElement('div')
    blogContent.classList.add('blog_content', 'content', 'blog_content-item')
    let blogData = document.createElement('div')
    blogData.classList.add('blog_data')
    let blogTitle = document.createElement('h2')
    blogTitle.classList.add('blog_data-title', 'blog_data-item')
    blogTitle.innerHTML = data.titleName
    blogData.appendChild(blogTitle)
    
    let blogBreadcrumbs = document.createElement('ul')
    blogBreadcrumbs.classList.add('blog_breadcrumbs', 'flex')
    let blogBreadcrumbsList = document.createElement('li')
    blogBreadcrumbsList.classList.add('blog_breadcrumbs-list', 'flex')
    let bx = document.createElement('i')
    bx.classList.add('bx', 'bxs-user-circle', 'breadcrumbs-icon')
    blogBreadcrumbsList.innerHTML = bx.outerHTML + data.userName

    let blogBreadcrumbsList2 = document.createElement('li')
    blogBreadcrumbsList2.classList.add('blog_breadcrumbs-list', 'flex')
    let bx2 = document.createElement('i')
    bx2.classList.add('bx', 'bxs-user-circle', 'breadcrumbs-icon')
    blogBreadcrumbsList2.innerHTML = bx2.outerHTML + data.date

    let blogBreadcrumbsList3 = document.createElement('li')
    blogBreadcrumbsList3.classList.add('blog_breadcrumbs-list', 'flex')
    let bx3= document.createElement('i')
    bx3.classList.add('bx', 'bxs-user-circle', 'breadcrumbs-icon')
    blogBreadcrumbsList3.innerHTML = bx3.outerHTML + data.category

    blogBreadcrumbs.appendChild(blogBreadcrumbsList)
    blogBreadcrumbs.appendChild(blogBreadcrumbsList2)
    blogBreadcrumbs.appendChild(blogBreadcrumbsList3)
    blogData.appendChild(blogBreadcrumbs)

    let blogItem = document.createElement('div')
    blogItem.classList.add('blog_item', 'flex')
    let blogData2 = document.createElement('div')
    blogData2.classList.add('blog_data')
    let blogImg = document.createElement('img')
    blogImg.classList.add('blog_img-item', 'img')
    blogImg.setAttribute('src','assets/img/'+ data.image)
    blogData2.appendChild(blogImg)
    blogItem.appendChild(blogData2)

    let blogData3 = document.createElement('div')
    blogData3.classList.add('blog_data', 'bolg_item-details')
    blogData3.innerHTML = data.description.substring(0, 200) + "....."
    blogItem.appendChild(blogData3)

    let blogData4 = document.createElement('div')
    blogData4.classList.add('blog_data', 'blog_data-footer', 'flex')
    let readMore = document.createElement('a')
    readMore.setAttribute('href','blog-detail.html/' + data.blogId)
    readMore.classList.add('social_share', 'read-more')
    readMore.innerText = 'Read More'
    blogData4.appendChild(readMore)
    // appendChild
    blogContent.appendChild(blogData)
    blogContent.appendChild(blogItem)
    blogContent.appendChild(blogData4)

    return blogContent.outerHTML
}
