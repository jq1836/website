import '../css/NavBar.css';

function NavBar() {
    return (
        <div class="NavBar">
            <a href="https://github.com/jq1836">
                <img src="../assets/github-logo.jpg" alt="GitHub"/>
            </a>
            <a>About me</a>
            <a href="./ModulesTakenPage.js">Modules taken</a>
            <a href="../assets/github-logo.jpg" download>Resume</a>
        </div>
    );
}

export default NavBar;
