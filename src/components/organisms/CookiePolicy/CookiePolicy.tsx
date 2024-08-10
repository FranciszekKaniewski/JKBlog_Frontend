import '../PrivacyPolicy/privacy-plicy.css'

export const CookiePolicy = () => (
    <body className="policy">
    <div className="container">
        <h1>Polityka Cookies</h1>

        <h2>1. Wstęp</h2>
        <p>Niniejsza Polityka Cookies wyjaśnia, czym są pliki cookie, jak ich używamy na stronie Prima Blog oraz jak
            użytkownicy mogą zarządzać swoimi preferencjami dotyczącymi plików cookie.</p>

        <h2>2. Czym są pliki cookie?</h2>
        <p>Pliki cookie to małe pliki tekstowe przechowywane na urządzeniu użytkownika przez przeglądarkę internetową.
            Służą one do różnych celów, w tym do poprawy funkcjonalności strony internetowej oraz zapewnienia
            bezpieczeństwa.</p>

        <h2>3. Jak używamy plików cookie?</h2>
        <p>Na stronie Prima Blog używamy jednego pliku cookie, który zawiera JSON Web Token (JWT). Plik ten ma ustawiony
            maksymalny czas życia na czas trwania sesji. Dzięki temu plikowi cookie możemy:</p>
        <ul>
            <li>Umożliwić logowanie do konta użytkownika</li>
            <li>Zapewnić bezpieczne sesje użytkowników</li>
        </ul>

        <h2>4. Rodzaje używanych plików cookie</h2>
        <p>Używamy następującego rodzaju pliku cookie:</p>
        <ul>
            <li><strong>Niezbędne pliki cookie:</strong> Ten plik cookie jest niezbędny do prawidłowego funkcjonowania
                naszej strony internetowej. Bez niego użytkownik nie mógłby się zalogować ani korzystać z niektórych
                funkcji strony.
            </li>
        </ul>

        <h2>5. Zarządzanie plikami cookie</h2>
        <p>Użytkownicy mogą zarządzać swoimi preferencjami dotyczącymi plików cookie poprzez ustawienia swojej
            przeglądarki internetowej. Większość przeglądarek umożliwia blokowanie lub usuwanie plików cookie. Należy
            jednak pamiętać, że wyłączenie niezbędnych plików cookie może uniemożliwić korzystanie z niektórych funkcji
            naszej strony, takich jak logowanie.</p>

        <h2>6. Zmiany w Polityce Cookies</h2>
        <p>Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej Polityce Cookies. Wszelkie zmiany będą publikowane
            na naszej stronie internetowej.</p>

        <h2>7. Kontakt</h2>
        <p>W razie pytań dotyczących niniejszej Polityki Cookies, prosimy o kontakt na adres e-mail: <a
            href="mailto:kontakt@primablog.com">kontakt@primablog.com</a>.</p>
    </div>
    </body>
)