const navData = [
    {label:"Category",route:"category.html",icon:"fa-circle-nodes"},
    {label:"Expense",route:"expense.html",icon:"fa-money-bill-transfer"}
] 

const generateNavList = () => {
    let UI = ""
    navData.map((item,index)=>{
        UI += `
                <div class="d-flex justify-content-start align-items-center m-3">
                    <i class="fa-solid ${item.icon} fa-xl"></i>
                    <a href="${item.route}" class="ms-3" style="text-decoration: none !important; color:#fafafa">
                     <h5>${item.label} </h5>
                    </a>
                </div>
            `
    })
    return UI
}

$(document).ready(function () {
    $("#nav").append(`
        <div class="offcanvas offcanvas-start text-bg-dark" id="demo">
            <div class="offcanvas-header">
            <h4 class="offcanvas-title">Expense Manager</h4>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
            </div>
            <div class="offcanvas-body">
               ${generateNavList()}
            </div>
        </div>   

        <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
            <div class="container-fluid">
            <div class="d-flex justify-content-center align-items-center">
                <a href="#" data-bs-toggle="offcanvas" data-bs-target="#demo"> <i class="fa-solid fa-bars fa-xl" style="color: #ffffff;"></i> </a>
                <a class="navbar-brand ms-5" href="#">
                    <h5 class="m-0">Expense Manager</h5>
                </a>
            </div>
            </div>
        </nav>
    `);
});