class AppHeader extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
        <style>            
            app-header h2 {
                padding: 30px;
                width: 100%;
                background-color: #F25F5C;
                color: white;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                text-align: center;
                display: block;
            }

            nav {
                background-color: rgb(199, 81, 79);
                padding: 5px;
                position: sticky;
                top: 0;
                text-align: center;
            }

            nav a {
                font-size: 18px;
                font-weight: 400;
                text-decoration: none;
                color: white;
            }

            nav li {
                display: inline;
                list-style-type: none;
                margin-right: 20px;
            }

            header {
                display: inline;
            }
        </style>
        <h2> Pantau Angka Pasien COVID-19</h2>
        </div>
        <nav>
            <ul>
                <li><a id="global">Cari Tau Perkembangan Jumlah Pasien Covid Secara Global Berdasarkan Negara </a></li>
            </ul>
        </nav>`;
    }
}

customElements.define("app-header", AppHeader);