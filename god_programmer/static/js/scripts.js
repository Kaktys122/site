const sidebar = document.getElementById("sidebar");

function hideSidebar() {
   sidebar.style.display = "none";
}

hideSidebar();
function showSidebar() {
   sidebar.style.display = "block";
}

function toggleSidebar()
{
   if (sidebar.style.display === "none") {
      showSidebar();
   } else
   {
      hideSidebar();
   }
}
function toggleSidebar()
