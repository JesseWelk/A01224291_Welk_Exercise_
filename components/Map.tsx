import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';

const icon = L.icon({ iconUrl: "/images/mark.png" })

const milleniumPolyline: [number, number][] = [
    [49.26597488669037, -123.07897627382238],
    [49.26274199779381, -123.06923650285458],
    [49.25905001295821, -123.04536927401993],
    [49.26097690386312, -123.03283755868026],
    [49.26505798851379, -123.01360308751491],
    [49.266485685677885, -123.00166104702872],
    [49.264878301473544, -122.98215797401967],
    [49.259375022258986, -122.96395698751525],
    [49.254817054604636, -122.93918000285487],
    [49.253573225632564, -122.91818854702936],
    [49.24861184257282, -122.89695200285514],
    [49.26138458881384, -122.8898831316894],
    [49.27819195488769, -122.846019374019],
    [49.2773989573046, -122.82819000285396],
    [49.27401157070784, -122.80002549426221],
    [49.28050935301764, -122.79394888935836],
    [49.28580313362013, -122.79155682984432],
]

const expoPolyline: [number, number][][] = [
    [
        [49.28612693436166, -123.11161228935825],
        [49.2855947612237, -123.12013952984424],
        [49.28352282559207, -123.11614423168854],
        [49.27979144983549, -123.10976537401892],
        [49.273283972300625, -123.10039291819352],
        [49.26270699005874, -123.06920431634995],
        [49.24835521089222, -123.05583147217607],
        [49.244307338073575, -123.04611432129694],
        [49.23854129113787, -123.03174707402073],
        [49.229842645995035, -123.01270471819565],
        [49.22600995412876, -123.0039049181957],
        [49.22024926098813, -122.98841985868212],
        [49.21243051039636, -122.9591450451872],
        [49.20020191557986, -122.94907468936213],
        [49.20157814524563, -122.91263973169222],
        [49.204953453487065, -122.90618139363636],
        [49.224846216922394, -122.8893854163517],
        [49.233372962885596, -122.88284094518619],
        [49.24859083192091, -122.89699491819468],
        [49.25358022847741, -122.91815636052472],
    ],
    [
        [49.204953453487065, -122.90618139363636],
        [49.204596926280374, -122.87429560285722],
        [49.19906451953125, -122.8506960605273],
        [49.189713921508705, -122.84799581819745],
        [49.182938041673694, -122.84484021819762],
    ]
]

const milleniumLine = { color: 'brown' }
const expoLine = { color: 'blue' }

const center: [number, number] = [49.25299, -123.00600];

const Map = () => {
    return (
        <MapContainer
            style={{ height: "100vh" }}
            center={[49.24966, -123.00934]} zoom={14} scrollWheelZoom={false}
        >
            <TileLayer
                attribution='&copy; <a href="">By Jesse Welk</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[49.28612693436166, -123.11161228935825]} icon={icon}>
                <Popup>
                    WaterFront Station
                </Popup>
            </Marker>
            <Marker position={[49.2855947612237, -123.12013952984424]} icon={icon}>
                <Popup>
                    Burrard Station
                </Popup>
            </Marker>
            <Marker position={[49.28352282559207, -123.11614423168854]} icon={icon}>
                <Popup>
                    Granville Station
                </Popup>
            </Marker>
            <Marker position={[49.27979144983549, -123.10976537401892]} icon={icon}>
                <Popup>
                    Stadium-Chinatown Station
                </Popup>
            </Marker>
            <Marker position={[49.273283972300625, -123.10039291819352]} icon={icon}>
                <Popup>
                    Main Street-Science World Station
                </Popup>
            </Marker>
            <Marker position={[49.26270699005874, -123.06920431634995]} icon={icon}>
                <Popup>
                    Commercial-Broadway Station
                </Popup>
            </Marker>
            <Marker position={[49.24835521089222, -123.05583147217607]} icon={icon}>
                <Popup>
                    Nanaimo Station
                </Popup>
            </Marker>
            <Marker position={[49.244307338073575, -123.04611432129694]} icon={icon}>
                <Popup>
                    29th Ave Station
                </Popup>
            </Marker>
            <Marker position={[49.23854129113787, -123.03174707402073]} icon={icon}>
                <Popup>
                    Joyce-Collingwood Station
                </Popup>
            </Marker>
            <Marker position={[49.229842645995035, -123.01270471819565]} icon={icon}>
                <Popup>
                    Patterson Station
                </Popup>
            </Marker>
            <Marker position={[49.22600995412876, -123.0039049181957]} icon={icon}>
                <Popup>
                    Metrotown Station
                </Popup>
            </Marker>
            <Marker position={[49.22024926098813, -122.98841985868212]} icon={icon}>
                <Popup>
                    Royal Oak Station
                </Popup>
            </Marker>
            <Marker position={[49.21243051039636, -122.9591450451872]} icon={icon}>
                <Popup>
                    Edmonds Station
                </Popup>
            </Marker>
            <Marker position={[49.20020191557986, -122.94907468936213]} icon={icon}>
                <Popup>
                    22nd Street Station
                </Popup>
            </Marker>
            <Marker position={[49.20157814524563, -122.91263973169222]} icon={icon}>
                <Popup>
                    New Westminster Station
                </Popup>
            </Marker>
            <Marker position={[49.204953453487065, -122.90618139363636]} icon={icon}>
                <Popup>
                    Columbia Station
                </Popup>
            </Marker>
            <Marker position={[49.224846216922394, -122.8893854163517]} icon={icon}>
                <Popup>
                    Sapperton Station
                </Popup>
            </Marker>
            <Marker position={[49.233372962885596, -122.88284094518619]} icon={icon}>
                <Popup>
                    Braid Station
                </Popup>
            </Marker>
            <Marker position={[49.24859083192091, -122.89699491819468]} icon={icon}>
                <Popup>
                    Lougheed Town Centre Station
                </Popup>
            </Marker>
            <Marker position={[49.25358022847741, -122.91815636052472]} icon={icon}>
                <Popup>
                    Production Way-University Station
                </Popup>
            </Marker>
            <Marker position={[49.204596926280374, -122.87429560285722]} icon={icon}>
                <Popup>
                    Scott Road Station
                </Popup>
            </Marker>
            <Marker position={[49.204596926280374, -122.87429560285722]} icon={icon}>
                <Popup>
                    Gateway Station
                </Popup>
            </Marker>
            <Marker position={[49.189713921508705, -122.84799581819745]} icon={icon}>
                <Popup>
                    Surrey Central Station
                </Popup>
            </Marker>
            <Marker position={[49.182938041673694, -122.84484021819762]} icon={icon}>
                <Popup>
                    King George Station
                </Popup>
            </Marker>

            {/* Millenium Line */}

            <Marker position={[49.26597488669037, -123.07897627382238]} icon={icon}>
                <Popup>
                    VCC-Clark Station
                </Popup>
            </Marker>
            <Marker position={[49.25905001295821, -123.04536927401993]} icon={icon}>
                <Popup>
                    Renfrew Station
                </Popup>
            </Marker>
            <Marker position={[49.26097690386312, -123.03283755868026]} icon={icon}>
                <Popup>
                    Rupert Station
                </Popup>
            </Marker>
            <Marker position={[49.26505798851379, -123.01360308751491]} icon={icon}>
                <Popup>
                    Gilmore Station
                </Popup>
            </Marker>
            <Marker position={[49.266485685677885, -123.00166104702872]} icon={icon}>
                <Popup>
                    Brentwood Town Centre Station
                </Popup>
            </Marker>
            <Marker position={[49.264878301473544, -122.98215797401967]} icon={icon}>
                <Popup>
                    Holdom Station
                </Popup>
            </Marker>
            <Marker position={[49.259375022258986, -122.96395698751525]} icon={icon}>
                <Popup>
                    Sperling-Burnaby Lake Station
                </Popup>
            </Marker>
            <Marker position={[49.254817054604636, -122.93918000285487]} icon={icon}>
                <Popup>
                    Lake City Way Station
                </Popup>
            </Marker>
            <Marker position={[49.26138458881384, -122.8898831316894]} icon={icon}>
                <Popup>
                    Burquitlam Station
                </Popup>
            </Marker>
            <Marker position={[49.27819195488769, -122.846019374019]} icon={icon}>
                <Popup>
                    Moody Centre Station
                </Popup>
            </Marker>
            <Marker position={[49.2773989573046, -122.82819000285396]} icon={icon}>
                <Popup>
                    Inlet Centre Station
                </Popup>
            </Marker>
            <Marker position={[49.27401157070784, -122.80002549426221]} icon={icon}>
                <Popup>
                    Coquitlam Central Station
                </Popup>
            </Marker>
            <Marker position={[49.28050935301764, -122.79394888935836]} icon={icon}>
                <Popup>
                    Lincoln Station
                </Popup>
            </Marker>
            <Marker position={[49.28580313362013, -122.79155682984432]} icon={icon}>
                <Popup>
                    Lafarge Lake-Douglas Station
                </Popup>
            </Marker>

            <Polyline pathOptions={milleniumLine} positions={milleniumPolyline} />
            <Polyline pathOptions={expoLine} positions={expoPolyline} />

        </MapContainer>
    )
}

export default Map;