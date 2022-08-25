import GitHubIcon from '@mui/icons-material/GitHub';

export default function Navbar() {
    return (
        <>
            <div className="navbar" >
                <h2>Subneteo App</h2>
                <div className="container-link">
                    <a href="https://github.com/addRian0-0/" >
                        <h3 className='addrian' ><GitHubIcon sx={{ marginRight: "10px" }} fontSize="large" />by addRian0-0</h3>
                    </a>
                </div>
            </div>
        </>
    )
}
