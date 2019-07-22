<template>
  <div>
  <h1>Tervetuloa Leiriappiin</h1>

<p>Tervetuloa käyttämään leiriappia! Piirileirin tiedotus on tulevaisuusteeman mukaisesti ottanut askeleen eteenpäin; viesti johtajateltasta leiriläisille kulkee nopeammin, helpommin ja ympäristöystävällisemmin kuin koskaan aikaisemmin. Monet tehdyistä uudistuksista ovat vielä verrattain kokeellisella tasolla ja sovelluksen käytön aikana voi törmätä pienempiin virheisiin, joista nettitiimin kehittäjille voi lähettää palautetta. Sovellusta kehitetään eteenpäin vielä leirin aikanakin.</p>
<p> Sovelluksen kehittämisesta, ylläpidosta ja sisällön lisäämisestä vastaa Ilveksen nettitiimi:
  <ul>
    <li>Ilari Nyman, nettikymppi</li>
    <li>Jesse Heiskanen, nettimestari</li>
    <li>Sami Kuivasaari, nettipäällikkö</li>
  </ul>
  Kaikki kyssärit ja palaute appiin liittyen otetaan mielellään vastaan. Laita postia, tule käymään toimistoteltalla, tai vedä muuten vaan hihasta!</p>

  <p>Mutta mikä tärkeintä: <strong>Hauskaa leiriä kaikille</strong></p>

<h2>Käyttöohjeet (TL;DR?)</h2>

<h3> Sovelluksen asentaminen</h3>
Suosittelemme sovelluksen asentamistä älypuhelimesi kotinäyttöön. Suht. tuoreiden Android-laitteiden tulisi automaattisesti ehdottaa lisäystä kotinäyttöön kun http://app.ilves19.fi -sivu avataan ensimmäisen kerran.
Iphone-laitteilla sovellus pitää itse lisätä kotinäyttöön, sen voi tehdä seuraavasti
<ol>
    <li>Avaa https://app.ilves19.fi sivu Safari selaimella (todennäköisesti olet jo tehnyt tämän)</li>
    <li>Napaita Jaa (Share) painiketta (se näyttää laatikolta, josta nousee nuoli ylöspäin)</li>
    <li>Napauta ikonia, jossa lukee "Lisää koti-näyttöön (Add to Home Screen)"</li>
    <li>Napauta "Lisää (Add)" painiketta</li>
</ol>

<h3> Käyttövinkkejä</h3>

Sovelluksen eri sivuilla liikutaan alareunasta löytyvän navigointipalkin kautta:
 <md-list>
      <md-list-item to="/page/mobiili">
        <md-icon class="md-size-3x">home</md-icon>
        <div class="md-list-item-text">
          <span>
            <strong>Etusivu</strong>
          </span>
          <span>Sovelluksen etusivulla näytetään tervetuloilmoitus ja tärkeää ajankohtaista tietoa</span>
        </div>
      </md-list-item>

      <md-list-item to="/kategoria/mobiiliuutiset">
        <md-icon class="md-size-3x" md-src="/assets/baseline-local_post_office-24px.svg" />
        <div class="md-list-item-text">
          <span>
            <strong>Uutiset</strong>
          </span>
          <span>Täällä näytetään tuoreimpia uutisia leiriltä, jotka on suunnattu pääasiassa osallistujille. Ilveksen nettisivuilla olevat uutiset puolestaan suunnataan enemmän leririn menoa ulkopuolelta seuraaville. Joskus nämä voivat olla samojakin uutisia</span>
        </div>
      </md-list-item>

     <md-list-item to="/tapahtumat">
        <md-icon class="md-size-3x" md-src="/assets/baseline-event-24px.svg" />
        <div class="md-list-item-text">
          <span>
            <strong>Tapahtumat</strong>
          </span>
          <span>Tällä sivulla näet aikajärjestyksessä listan tulevista tapahtumista. Omilla välilehdillään ovat kaikki yhteiset tapahtumat, sekä omat tapahtumat. Omiin tapahtumiin poimitaan niiden alaleirien ja ikäkausien tapahtumat, jotka olet valinnut sovelluksen asetuksista.</span>
        </div>
      </md-list-item>

      <md-list-item to="/kartta">
        <md-icon class="md-size-3x" md-src="/assets/baseline-map-24px.svg" />
        <div class="md-list-item-text">
          <span>
            <strong>Leirialueen kartta</strong>
          </span>
          <span>Google Mapsin päälle rakennettu leirialueen kartta, jota voi zoomailla ja klikkailla.</span>
        </div>
      </md-list-item>
<md-list-item to="/info">
        <md-icon class="md-size-3x" md-src="/assets/campground-solid.svg" />
        <div class="md-list-item-text">
          <span>
            <strong>Tietoja osallistujille
            </strong>
          </span>
          <span>Täältä löydät erilaisia leirillä tarvittavia tietoja ja linkkejä</span>
        </div>
      </md-list-item>
      </md-list>

<p>Leiriappi on alusta alkaen suunniteltu muiden mobiilisovellusten tavoin mahdollisimman intuitiiviseksi käyttää eikä suurimmalla osalla leiriläisistä pitäisi olla vaikeuksia löytää etsimäänsä. 
Koska esimerkiksi ohjeet hätätilanteissa toimimiseen on kuitenkin äärimmäisen tärkeä voida löytää heti, tulee käyttäjien kokeilla etukäteen tiedon hakemista etukäteen. 
Voit käyttää alla olevia skenaarioita harjoitteleminen 💪
<ol>
<li>Skenaario – mistä löytyy ohjeet hätätilassa toimimiseen, kun joku kuitenkin vuolee itseään päin (vihje: Leiritietoa)</li>
<li>Skenaario – helleraja ylittää sietokynnykse, mistäs se jäätelökioski löytyikään (vihje: kokeile karttaa)</li>
<li>Skenaario - Missäs kaikki muut ovat? Pitäisikö minunkin olla nyt jossain ohjelmassa? Mitäs meillä olikaan? (vihje: valitse ikäkausi ja alaleiri, sitten tapahtumat -> omat tapahtumat)</li>
</ol>
</p>


<h2>Usein annetut vastaukset</h2>
<ul>
<li>Oman sijainnin näkyminen kartalla on kehityksen alla 👀</li>
<li> Välimuistin tyhjentäminen tai sovelluksen uudelleen asentaminen voi korjata mm. pysähtymisen.</li>
<li> Sovellusta voi käyttää ilman internet-yhteyttä, vaikka se vaaditaankin sisällön lataamiseen.</li>
<li> Ai miksi leiriappi? No, ensinnäkin sovellus on ympäristöystävällisempi, koska paperin tuottaminen puista, kuljettaminen, painaminen ja jakeleminen tuottavat sovellusta enemmän päästöjä 🏭 Toisekseen, halusimme oppia uutta.</li>
</ul>

    <h2>Leiriapplikaation versiohistoria</h2>
    <strong>Versio 1.0 23.7.2019</strong>
    <ul>
      <li>Ensimmäinen versio julkaistu</li>
    </ul>

  </div>
</template>


<script>
</script>

<style lang="scss">
</style>
