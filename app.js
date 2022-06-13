// Working with the scroll event:

let scrollPosition = 0;

window.addEventListener("scroll", (e) => {
  scrollPosition = window.scrollY;
});

// Progress bar change on scroll:

const statBar = document.getElementsByClassName("progressBar");

window.addEventListener("scroll", (e) => {
  let persentage = Math.floor(scrollPosition / 20);
  statBar[0].style.width = `${persentage}%`;
});

// "Scroll me" div must be hidden on scroll:

let scrollMe = document.getElementsByClassName("scrollMe");

window.addEventListener("scroll", (e) => {
  scrollMe[0].classList.add("animateScrollMe");
});

// Flowers animations:

const flowerSVG = `<svg
width="129.89894mm"
height="126.03649mm"
viewBox="0 0 129.89894 126.03649"
version="1.1"
id="svg5"
inkscape:version="1.2 (dc2aedaf03, 2022-05-15)"
sodipodi:docname="flower.svg"
xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
xmlns="http://www.w3.org/2000/svg"
xmlns:svg="http://www.w3.org/2000/svg">
<sodipodi:namedview
  id="namedview7"
  pagecolor="#505050"
  bordercolor="#eeeeee"
  borderopacity="1"
  inkscape:showpageshadow="0"
  inkscape:pageopacity="0"
  inkscape:pagecheckerboard="0"
  inkscape:deskcolor="#505050"
  inkscape:document-units="mm"
  showgrid="false"
  inkscape:zoom="0.49638341"
  inkscape:cx="338.44806"
  inkscape:cy="452.27136"
  inkscape:window-width="1920"
  inkscape:window-height="1016"
  inkscape:window-x="0"
  inkscape:window-y="0"
  inkscape:window-maximized="1"
  inkscape:current-layer="layer1" />
<defs
  id="defs2">
 <inkscape:path-effect
    effect="bspline"
    id="path-effect788"
    is_visible="true"
    lpeversion="1"
    weight="33.333333"
    steps="2"
    helper_size="0"
    apply_no_weight="true"
    apply_with_weight="true"
    only_selected="false" />
 <inkscape:path-effect
    effect="bspline"
    id="path-effect788-3"
    is_visible="true"
    lpeversion="1"
    weight="33.333333"
    steps="2"
    helper_size="0"
    apply_no_weight="true"
    apply_with_weight="true"
    only_selected="false" />
 <inkscape:path-effect
    effect="bspline"
    id="path-effect788-3-7"
    is_visible="true"
    lpeversion="1"
    weight="33.333333"
    steps="2"
    helper_size="0"
    apply_no_weight="true"
    apply_with_weight="true"
    only_selected="false" />
 <inkscape:path-effect
    effect="bspline"
    id="path-effect788-3-3"
    is_visible="true"
    lpeversion="1"
    weight="33.333333"
    steps="2"
    helper_size="0"
    apply_no_weight="true"
    apply_with_weight="true"
    only_selected="false" />
 <inkscape:path-effect
    effect="bspline"
    id="path-effect788-3-2"
    is_visible="true"
    lpeversion="1"
    weight="33.333333"
    steps="2"
    helper_size="0"
    apply_no_weight="true"
    apply_with_weight="true"
    only_selected="false" />
</defs>
<g
  inkscape:label="Layer 1"
  inkscape:groupmode="layer"
  id="layer1"
  transform="translate(-48.060958,-56.84245)">
 <path
    style="fill:#ff0000;stroke:#ff0000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
    d="m 129.17485,114.84471 c 11.66666,-9.77703 38.13387,-27.706836 45.97772,-25.058346 7.84386,2.64849 -2.93515,25.874166 -14.60192,35.651036 -11.66677,9.77686 -24.22091,6.10474 -32.06491,3.45659 -7.84401,-2.64815 -10.97754,-4.27226 0.68911,-14.04928 z"
    id="path786"
    inkscape:path-effect="#path-effect788"
    inkscape:original-d="m 114.37435,122.99746 c 26.46737,-17.92947 52.93457,-35.859284 79.40163,-53.789435 -10.77929,23.226949 -21.5583,46.452625 -32.33769,69.678435 -12.55449,-3.67193 -25.10863,-7.34405 -37.66317,-11.01658 -3.1335,-1.62382 -6.26703,-3.24794 -9.40077,-4.87242 z" />
 <path
    style="fill:#ff0000;stroke:#ff0000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
    d="m 132.78533,132.28028 c 14.30048,5.21511 43.06176,19.17148 44.69003,27.2887 1.62827,8.11723 -23.87528,10.39517 -38.17567,5.17988 -14.3004,-5.21529 -17.39733,-17.92355 -19.02596,-26.04073 -1.62864,-8.11719 -1.78888,-11.64296 12.5116,-6.42785 z"
    id="path786-6"
    inkscape:original-d="m 118.32459,123.53904 c 28.76106,13.95668 57.52235,27.91303 86.28384,41.86912 -25.50478,2.27833 -51.00832,4.55627 -76.51215,6.83395 -3.09726,-12.70847 -6.19419,-25.41673 -9.29096,-38.12555 -0.16047,-3.52561 -0.3207,-7.05138 -0.48073,-10.57752 z"
    inkscape:path-effect="#path-effect788-3" />
 <path
    style="fill:#ff0000;stroke:#ff0000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
    d="m 117.23387,68.106537 c 3.93045,14.705535 8.99485,46.270433 3.27955,52.260083 -5.7153,5.98965 -22.209508,-13.59505 -26.139771,-28.300613 -3.930262,-14.705568 4.703417,-24.531576 10.418471,-30.521504 5.71506,-5.989927 8.5113,-8.143502 12.44175,6.562034 z"
    id="path786-6-5"
    inkscape:path-effect="#path-effect788-3-7"
    inkscape:original-d="m 116.09992,51.247227 c 5.06403,31.564904 10.12845,63.129803 15.19322,94.694713 -16.49525,-19.58548 -32.989449,-39.17018 -49.483617,-58.755281 8.633651,-9.826407 17.26733,-19.652416 25.901557,-29.478618 2.79595,-2.153658 5.5922,-4.307221 8.38884,-6.460814 z" />
 <path
    style="fill:#ff0000;stroke:#ff0000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
    d="m 79.427696,169.28066 c 7.619135,-13.17763 26.357824,-39.07846 34.634474,-39.27245 8.27666,-0.19399 6.09134,25.31765 -1.52796,38.49516 -7.6193,13.17752 -20.672249,14.02063 -28.948925,14.21499 -8.276677,0.19437 -11.776723,-0.26007 -4.157589,-13.4377 z"
    id="path786-6-56"
    inkscape:path-effect="#path-effect788-3-3"
    inkscape:original-d="m 68.308174,182.00381 c 18.738967,-25.90056 37.477636,-51.8014 56.216076,-77.7025 -2.18515,25.51293 -4.37046,51.02457 -6.55608,76.53645 -13.05324,0.84341 -26.106191,1.68652 -39.159681,2.52938 -3.499911,-0.45418 -6.999956,-0.90863 -10.500315,-1.36333 z" />
 <path
    style="fill:#ff0000;stroke:#ff0000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
    d="m 59.831451,119.61285 c 14.992136,-2.63383 46.878309,-4.9279 52.347049,1.28769 5.46873,6.21559 -15.479007,20.94011 -30.471158,23.57374 -14.99215,2.63363 -24.028294,-6.82359 -29.497326,-13.03896 -5.469032,-6.21536 -7.370701,-9.18865 7.621435,-11.82247 z"
    id="path786-6-9"
    inkscape:path-effect="#path-effect788-3-2"
    inkscape:original-d="m 42.937464,119.27309 c 31.88615,-2.29369 63.772326,-4.58778 95.658536,-6.88221 -20.94861,14.72547 -41.896346,29.45 -62.844469,44.17445 -9.036542,-9.45723 -18.072684,-18.91445 -27.10897,-28.37222 -1.901779,-2.97302 -3.803436,-5.94632 -5.705097,-8.92002 z" />
 <path
    style="fill:#ff0000;stroke-width:0.712259"
    d="m 440.88813,457.72283 c -9.00677,-2.26269 -17.38748,-8.08115 -30.30601,-21.0405 -16.73984,-16.79274 -29.76062,-35.33742 -41.30567,-58.8291 -6.83598,-13.90974 -11.1129,-25.67289 -13.5958,-37.39358 -2.11857,-10.00085 -2.30958,-28.65537 -0.38652,-37.74971 5.13404,-24.27945 17.11597,-44.3942 41.62036,-69.87046 17.14516,-17.82515 23.63478,-20.49114 30.48141,-12.52203 8.82758,10.27484 19.51256,48.36985 28.43495,101.37871 9.29688,55.23379 11.03819,101.52871 4.60257,122.36484 -3.46087,11.205 -10.29896,15.9847 -19.54529,13.66183 z"
    id="path930"
    transform="scale(0.26458333)" />
 <path
    style="fill:#ff0000;stroke-width:0.712259"
    d="m 532.41337,497.07058 c -13.39312,-0.89857 -32.56444,-5.49436 -51.65264,-12.38228 -13.81638,-4.9856 -19.49747,-8.71693 -20.7263,-13.61299 -0.59598,-2.37457 0.87019,-7.30128 3.23657,-10.87573 9.27799,-14.01451 42.7492,-41.39958 85.88045,-70.26461 42.69111,-28.57048 76.43777,-45.84613 97.28021,-49.79987 12.71087,-2.41122 18.9232,-0.51526 22.94467,7.00254 2.27488,4.25268 2.20436,17.30536 -0.14284,26.44204 -7.71726,30.04001 -29.5162,66.97864 -53.80249,91.16911 -11.30239,11.2578 -18.29582,16.53443 -29.37504,22.16385 -16.2672,8.26544 -33.42452,11.51441 -53.64259,10.15794 z"
    id="path932"
    transform="scale(0.26458333)" />
 <path
    style="fill:#ff0000;stroke-width:0.712259"
    d="m 579.06631,632.01908 c -33.94962,-2.7069 -57.10992,-9.41755 -75.82294,-21.96952 -7.11059,-4.76951 -17.61538,-14.90398 -23.20715,-22.38904 -5.36589,-7.18271 -11.93825,-19.61754 -15.64748,-29.60483 -3.27561,-8.81978 -8.28702,-28.42706 -10.26313,-40.15483 -3.65277,-21.6784 -0.73129,-27.2817 13.67023,-26.21901 16.46855,1.21521 55.23475,15.76392 99.87433,37.4822 58.90596,28.65923 95.99052,55.00118 101.82261,72.32676 1.98692,5.90262 0.5072,10.36801 -5.05942,15.26794 -8.57878,7.55134 -26.49748,12.86438 -50.46637,14.96368 -7.79125,0.68238 -27.91733,0.85345 -34.90068,0.29665 z"
    id="path934"
    transform="scale(0.26458333)" />
 <path
    style="fill:#ff0000;stroke-width:0.712259"
    d="m 298.00955,689.44204 c -5.72718,-0.66942 -10.21726,-2.84206 -11.66688,-5.64532 -4.34881,-8.40967 3.75936,-27.61069 27.1867,-64.38102 36.90085,-57.91767 79.08284,-107.64315 103.85422,-122.42671 17.02245,-10.15899 27.27679,-3.99996 31.49076,18.91423 2.45598,13.35474 1.2703,38.91323 -2.74845,59.24567 -7.16081,36.22938 -19.34114,63.42577 -36.39606,81.26552 -20.41666,21.3562 -44.3941,30.76456 -84.22762,33.04956 -13.65395,0.78324 -20.65188,0.77766 -27.49267,-0.0219 z"
    id="path936"
    transform="scale(0.26458333)" />
 <path
    style="fill:#ff0000;stroke-width:0.712259"
    d="m 279.56153,546.51972 c -10.18991,-1.09126 -24.21938,-5.16341 -32.91903,-9.55499 -16.10048,-8.12749 -31.36391,-20.90982 -49.07196,-41.09521 -15.2401,-17.37217 -17.69081,-23.62895 -11.62937,-29.69038 6.09301,-6.09301 23.67979,-11.12883 54.45494,-15.59271 36.00277,-5.22214 69.27681,-7.66152 103.98096,-7.62303 43.23079,0.048 67.08659,4.02771 77.16,12.87228 3.66302,3.21617 4.75098,5.62029 4.74279,10.48032 -0.0127,7.58633 -5.30042,16.16671 -16.8259,27.30377 -25.87252,25.0006 -71.06332,47.48605 -105.18635,52.33727 -6.65135,0.94561 -18.59119,1.21754 -24.70608,0.56268 z"
    id="path938"
    transform="scale(0.26458333)" />
</g>
</svg>
`;

const flowersWrapper = document.getElementsByClassName("smallFlowersWrapper");

const addFlowers = (persentage) => {
  const flower = document.getElementsByClassName("flower");
  if (persentage > 1) {
    flower[0].classList.add("flowerIn");
    flower[0].innerHTML = flowerSVG;
  }
  if (persentage > 24) {
    flower[1].classList.add("flowerIn");
    flower[1].innerHTML = flowerSVG;
  }
  if (persentage > 49) {
    flower[2].classList.add("flowerIn");
    flower[2].innerHTML = flowerSVG;
  }
  if (persentage > 74) {
    flower[3].classList.add("flowerIn");
    flower[3].innerHTML = flowerSVG;
  }
  if (persentage > 99) {
    flower[4].classList.add("flowerIn");
    flower[4].innerHTML = flowerSVG;
  }
};

window.addEventListener("scroll", (e) => {
  let persentage = Math.floor(scrollPosition / 20);
  addFlowers(persentage);
});
