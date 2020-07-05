class Grafik extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        // const gambar = fetch('https://covid19.mathdro.id/api/countries/indonesia/og');
        // const gambarJson = gambar.json();
        
        this.innerHTML = `
            <style>
                .grafik{
                    max-width: 750px;
                }
            </style>
            <div class ="card">
                <div class ="card-header">
                <h3> Grafik COVID-19 Secara Global</h3>
                </div>
                <div class ="card-info">
                    <img class="grafik" src="https://covid19.mathdro.id/api/og" alt="">
                </div>
            </div>
        `;
    }
}

customElements.define("grafik-gambar", Grafik);