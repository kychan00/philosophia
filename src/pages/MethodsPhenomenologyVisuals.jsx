const ink = '#24211d'
const paper = '#f7f0e4'
const moss = '#58735d'
const rust = '#a9563f'
const violet = '#6f6d85'
const gold = '#a8792e'
const line = '#b9ad9c'
const pale = '#e9e0d2'

function Label({ x, y, children, anchor = 'middle', size = 11, weight = 700, fill = ink }) {
  return <text x={x} y={y} textAnchor={anchor} fontFamily="Arial, sans-serif" fontSize={size} fontWeight={weight} fill={fill}>{children}</text>
}

function Person({ x, y, scale = 1, fill = moss }) {
  return <g transform={'translate('+x+' '+y+') scale('+scale+')'}>
    <circle cx="0" cy="-18" r="8" fill={fill} />
    <path d="M0 -8 L0 18 M0 0 L-13 10 M0 0 L14 7 M0 18 L-10 35 M0 18 L11 34" fill="none" stroke={fill} strokeWidth="5" strokeLinecap="round" />
  </g>
}

function Arrow({ x1, y1, x2, y2, stroke = ink, dash = false }) {
  const angle = Math.atan2(y2-y1,x2-x1)
  const ah = 8
  return <g>
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={stroke} strokeWidth="2.5" strokeDasharray={dash?'5 5':undefined} />
    <path d={'M '+x2+' '+y2+' L '+(x2-ah*Math.cos(angle-.55))+' '+(y2-ah*Math.sin(angle-.55))+' L '+(x2-ah*Math.cos(angle+.55))+' '+(y2-ah*Math.sin(angle+.55))+' Z'} fill={stroke}/>
  </g>
}

function CityGrid({ x = 0, y = 0, w = 240, h = 120, stroke = line, opacity = 1 }) {
  return <g transform={'translate('+x+' '+y+')'} opacity={opacity}>
    {[.2,.45,.7].map((p,i)=><line key={'v'+i} x1={w*p} y1="0" x2={w*p} y2={h} stroke={stroke} strokeWidth="6" />)}
    {[.28,.58,.82].map((p,i)=><line key={'h'+i} x1="0" y1={h*p} x2={w} y2={h*p} stroke={stroke} strokeWidth="6" />)}
  </g>
}

function Frame({ children }) {
  return <svg className="phen2d-visual-svg" viewBox="0 0 520 250" role="img" aria-hidden="true">
    <rect x="1" y="1" width="518" height="248" rx="18" fill={paper} stroke={line} />
    {children}
  </svg>
}

function VisualM1() {
  return <Frame>
    <Label x="120" y="28" fill={gold}>MEDIR</Label>
    {[42,70,98].map((x,i)=><rect key={x} x={x} y={165-i*34} width="20" height={45+i*34} fill={gold} opacity={.75}/>)}
    <line x1="30" y1="210" x2="170" y2="210" stroke={ink} strokeWidth="2"/>
    <Label x="100" y="232" size={10}>frecuencia · cantidad</Label>
    <line x1="258" y1="24" x2="258" y2="225" stroke={line} strokeDasharray="4 5"/>
    <Label x="390" y="28" fill={moss}>COMPRENDER</Label>
    <circle cx="390" cy="125" r="66" fill="none" stroke={moss} strokeWidth="3"/>
    <circle cx="390" cy="125" r="42" fill="none" stroke={moss} strokeWidth="2" opacity=".65"/>
    <circle cx="390" cy="125" r="12" fill={moss}/>
    <Arrow x1={320} y1={82} x2={370} y2={115} stroke={moss}/>
    <Arrow x1={458} y1={175} x2={411} y2={138} stroke={moss}/>
    <Label x="390" y="232" size={10}>sentido · estructura</Label>
  </Frame>
}

function VisualM2() {
  return <Frame>
    <Label x="260" y="25" fill={violet}>UN MISMO OBJETO · DISTINTOS MODOS DE APARECER</Label>
    <rect x="220" y="85" width="80" height="80" rx="8" fill={pale} stroke={ink} strokeWidth="2"/>
    <path d="M230 150 L250 120 L270 140 L290 105" fill="none" stroke={ink} strokeWidth="3"/>
    {[
      {x:70,y:75,t:'familiar',c:moss},
      {x:450,y:75,t:'extraño',c:rust},
      {x:70,y:205,t:'útil',c:gold},
      {x:450,y:205,t:'incierto',c:violet},
    ].map((o,i)=><g key={i}><circle cx={o.x} cy={o.y} r="26" fill={o.c} opacity=".15" stroke={o.c}/><Arrow x1={o.x+(o.x<260?28:-28)} y1={o.y} x2={o.x<260?215:305} y2={125} stroke={o.c}/><Label x={o.x} y={o.y+4} size={10} fill={o.c}>{o.t}</Label></g>)}
  </Frame>
}

function VisualM3() {
  return <Frame>
    <Person x={105} y={130} scale={1.25} fill={violet}/>
    <circle cx="108" cy="76" r="4" fill={paper}/>
    <Arrow x1={145} y1={108} x2={375} y2={108} stroke={violet}/>
    <circle cx="410" cy="108" r="42" fill={pale} stroke={moss} strokeWidth="3"/>
    <path d="M385 120 Q410 88 435 120" fill="none" stroke={moss} strokeWidth="3"/>
    <Label x="105" y="220" size={11}>acto de conciencia</Label>
    <Label x="410" y="220" size={11}>algo hacia lo que se dirige</Label>
    <Label x="260" y="74" fill={violet}>INTENCIONALIDAD</Label>
  </Frame>
}

function VisualM4() {
  return <Frame>
    <rect x="185" y="66" width="150" height="118" rx="14" fill="#fffdf8" stroke={moss} strokeWidth="3"/>
    <Label x="260" y="115" fill={moss}>EXPERIENCIA</Label>
    <Label x="260" y="137" size={10}>tal como aparece</Label>
    <path d="M150 48 H120 V202 H150" fill="none" stroke={violet} strokeWidth="4"/>
    <path d="M370 48 H400 V202 H370" fill="none" stroke={violet} strokeWidth="4"/>
    <Label x="78" y="78" size={9} fill={rust}>causa</Label>
    <Label x="78" y="110" size={9} fill={rust}>diagnóstico</Label>
    <Label x="78" y="142" size={9} fill={rust}>juicio</Label>
    <Label x="78" y="174" size={9} fill={rust}>teoría</Label>
    {[72,104,136,168].map(y=><line key={y} x1="105" y1={y-4} x2="145" y2={y-4} stroke={rust} strokeWidth="2" strokeDasharray="4 4"/>)}
    <Label x="260" y="224" fill={violet}>PONER ENTRE PARÉNTESIS</Label>
  </Frame>
}

function VisualM5() {
  return <Frame>
    <rect x="35" y="65" width="180" height="120" rx="14" fill="#eeecf3" stroke={violet} strokeWidth="2"/>
    <rect x="305" y="65" width="180" height="120" rx="14" fill="#e8efe9" stroke={moss} strokeWidth="2"/>
    <Label x="125" y="92" fill={violet}>NOESIS</Label>
    <Label x="395" y="92" fill={moss}>NOEMA</Label>
    <Label x="125" y="125" size={11}>buscar · dudar</Label>
    <Label x="125" y="146" size={11}>recordar · decidir</Label>
    <Label x="395" y="125" size={11}>calle como ruta</Label>
    <Label x="395" y="146" size={11}>esquina como decisión</Label>
    <Arrow x1={218} y1={125} x2={298} y2={125} stroke={gold}/>
    <Arrow x1={302} y1={148} x2={222} y2={148} stroke={gold}/>
    <Label x="260" y="215" fill={gold}>CORRELACIÓN</Label>
  </Frame>
}

function VisualM6() {
  return <Frame>
    <line x1="260" y1="35" x2="260" y2="215" stroke={line}/>
    <line x1="55" y1="125" x2="465" y2="125" stroke={line}/>
    <Person x={145} y={86} scale={.72} fill={moss}/>
    <Label x="145" y="113" size={10}>CUERPO</Label>
    <path d="M340 70 H430 M340 88 H397" stroke={gold} strokeWidth="5" strokeLinecap="round"/>
    <Label x="385" y="113" size={10}>ESPACIO</Label>
    <path d="M110 170 H190" stroke={violet} strokeWidth="3"/><circle cx="110" cy="170" r="5" fill={violet}/><circle cx="190" cy="170" r="5" fill={violet}/>
    <Label x="150" y="201" size={10}>TIEMPO</Label>
    <circle cx="390" cy="172" r="28" fill="none" stroke={rust} strokeWidth="2"/><circle cx="378" cy="165" r="4" fill={rust}/><circle cx="402" cy="165" r="4" fill={rust}/>
    <Label x="390" y="211" size={10}>MUNDO / OTROS</Label>
  </Frame>
}

function VisualM7() {
  return <Frame>
    <Label x="260" y="26" fill={gold}>VARIAR SIN PERDER EL FENÓMENO</Label>
    {[70,190,310,430].map((x,i)=><g key={x}>
      <rect x={x-45} y="60" width="90" height="105" rx="12" fill={i===1?'#e8efe9':'#f0e9dc'} stroke={i===1?moss:line}/>
      <circle cx={x} cy="96" r="14" fill={i===1?moss:gold} opacity=".75"/>
      <path d={'M '+(x-25)+' 135 Q '+x+' '+(112+i*7)+' '+(x+25)+' 135'} fill="none" stroke={ink} strokeWidth="2"/>
      <Label x={x} y="187" size={9}>{['A','B','C','D'][i]}</Label>
    </g>)}
    <Arrow x1={90} y1={215} x2={430} y2={215} stroke={gold}/>
    <Label x="260" y="239" size={9}>¿QUÉ PUEDE CAMBIAR? · ¿QUÉ PARECE NECESARIO?</Label>
  </Frame>
}

function VisualM8() {
  return <Frame>
    <Label x="185" y="27" fill={ink}>INTERPRETACIÓN RIGUROSA</Label>

    <circle cx="185" cy="130" r="42" fill="#fffdf8" stroke={ink} strokeWidth="2.5"/>
    <circle cx="185" cy="130" r="65" fill="none" stroke={violet} strokeWidth="3"/>
    <circle cx="185" cy="130" r="84" fill="none" stroke={gold} strokeWidth="3"/>
    <circle cx="185" cy="130" r="103" fill="none" stroke={moss} strokeWidth="3" strokeDasharray="7 6"/>

    <Label x="185" y="126" size={10}>INTERPRETACIÓN</Label>
    <Label x="185" y="143" size={8} weight={600}>argumentada</Label>

    <line x1="244" y1="102" x2="326" y2="72" stroke={violet} strokeWidth="2"/>
    <circle cx="244" cy="102" r="4" fill={violet}/>
    <rect x="334" y="55" width="142" height="34" rx="17" fill="#eeecf3" stroke={violet}/>
    <Label x="405" y="76" size={9} fill={violet}>LENGUAJE</Label>

    <line x1="265" y1="135" x2="326" y2="135" stroke={gold} strokeWidth="2"/>
    <circle cx="265" cy="135" r="4" fill={gold}/>
    <rect x="334" y="118" width="142" height="34" rx="17" fill="#f5ecd9" stroke={gold}/>
    <Label x="405" y="139" size={9} fill={gold}>HISTORIA</Label>

    <line x1="256" y1="190" x2="326" y2="198" stroke={moss} strokeWidth="2"/>
    <circle cx="256" cy="190" r="4" fill={moss}/>
    <rect x="334" y="181" width="142" height="34" rx="17" fill="#e8efe9" stroke={moss}/>
    <Label x="405" y="202" size={8} fill={moss}>MUNDO COMPARTIDO</Label>

    <Label x="185" y="239" size={8} fill={ink}>RIGOR = HACER EXPLÍCITOS LOS HORIZONTES</Label>
  </Frame>
}

function VisualC1() {
  return <Frame>
    <CityGrid x={120} y={48} w={290} h={150}/>
    <circle cx="175" cy="180" r="9" fill={rust}/><Label x="175" y="213" size={9} fill={rust}>AQUÍ</Label>
    <path d="M175 180 C200 150 220 140 240 115" fill="none" stroke={rust} strokeWidth="4" strokeDasharray="8 6"/>
    <path d="M240 115 C280 82 325 90 355 62" fill="none" stroke={line} strokeWidth="4" strokeDasharray="5 7"/>
    <path d="M355 50 l10 18 h-20 z" fill={moss}/>
    <Label x="372" y="48" size={9} fill={moss}>DESTINO</Label>
    <text x="260" y="137" textAnchor="middle" fontSize="34" fontFamily="Georgia,serif" fill={rust}>?</text>
  </Frame>
}

function VisualC2() {
  return <Frame>
    <Person x={110} y={128} scale={.85} fill={moss}/>
    <Person x={410} y={128} scale={.85} fill={violet}/>
    <path d="M155 82 Q260 35 365 82" fill="none" stroke={line} strokeWidth="2"/>
    <path d="M155 164 Q260 213 365 164" fill="none" stroke={line} strokeWidth="2"/>
    <rect x="196" y="77" width="128" height="95" rx="12" fill="#fffdf8" stroke={gold} strokeWidth="2"/>
    <Label x="260" y="105" fill={gold}>ENTREVISTA</Label>
    <Label x="260" y="131" size={10}>escena concreta</Label>
    <Label x="260" y="151" size={10}>descripción abierta</Label>
    <Label x="110" y="220" size={9}>experiencia vivida</Label>
    <Label x="410" y="220" size={9}>investigador</Label>
  </Frame>
}

function VisualC3() {
  return <Frame>
    <path d="M40 205 L190 80 L260 145 L340 60 L485 190" fill="none" stroke={line} strokeWidth="18" strokeLinejoin="round"/>
    <Person x={255} y={140} scale={.65} fill={rust}/>
    <path d="M185 72 L150 55 M185 72 L155 95 M335 57 L366 40 M335 57 L372 80" stroke={gold} strokeWidth="3"/>
    <rect x="55" y="26" width="220" height="46" rx="10" fill="#fffdf8" stroke={ink}/>
    <Label x="165" y="47" size={9}>“¿AVANZO O REGRESO?”</Label>
    <Label x="165" y="61" size={8} fill={violet}>descripción antes de teoría</Label>
  </Frame>
}

function VisualC4() {
  return <Frame>
    <CityGrid x={180} y={65} w={170} h={105} opacity={.75}/>
    <Person x={260} y={130} scale={.65} fill={moss}/>
    {[
      {x:55,y:55,t:'mala orientación'},
      {x:460,y:55,t:'mal diseño'},
      {x:55,y:205,t:'ansiedad'},
      {x:460,y:205,t:'falta atención'}
    ].map((o,i)=><g key={i}><rect x={o.x-48} y={o.y-16} width="96" height="32" rx="16" fill="#f4e4df" stroke={rust}/><Label x={o.x} y={o.y+3} size={8} fill={rust}>{o.t}</Label><line x1={o.x+(o.x<260?50:-50)} y1={o.y} x2={o.x<260?175:355} y2={125} stroke={rust} strokeDasharray="4 4"/></g>)}
    <path d="M165 44 H145 V205 H165 M355 44 H375 V205 H355" fill="none" stroke={violet} strokeWidth="4"/>
  </Frame>
}

function VisualC5() {
  return <Frame>
    <Person x={100} y={128} scale={.75} fill={violet}/>
    <Label x="100" y="220" size={9} fill={violet}>buscar · dudar · decidir</Label>
    <Arrow x1={135} y1={105} x2={250} y2={70} stroke={violet}/>
    <Arrow x1={138} y1={125} x2={260} y2={125} stroke={violet}/>
    <Arrow x1={135} y1={145} x2={250} y2={185} stroke={violet}/>
    <rect x="270" y="45" width="85" height="45" rx="6" fill={pale} stroke={moss}/><Label x="312" y="72" size={9}>LETRERO / PISTA</Label>
    <path d="M270 118 H355" stroke={moss} strokeWidth="12"/><Label x="312" y="145" size={9}>CALLE / RUTA</Label>
    <Person x={315} y={186} scale={.45} fill={moss}/><Label x="400" y="200" size={9}>OTRO / GUÍA</Label>
  </Frame>
}

function VisualC6() {
  return <Frame>
    <Person x={250} y={122} scale={1.2} fill={moss}/>
    <path d="M210 72 Q170 50 138 76" fill="none" stroke={gold} strokeWidth="3"/><Arrow x1={145} y1={77} x2={130} y2={90} stroke={gold}/>
    <path d="M292 74 Q335 50 370 78" fill="none" stroke={gold} strokeWidth="3"/><Arrow x1={365} y1={78} x2={382} y2={92} stroke={gold}/>
    <path d="M205 190 q-24 15 -42 0 M295 190 q24 15 42 0" fill="none" stroke={rust} strokeWidth="4" strokeLinecap="round"/>
    <Label x="90" y="32" size={9}>MIRAR</Label>
    <Label x="430" y="32" size={9}>GIRAR</Label>
    <Label x="95" y="225" size={9}>RETROCEDER</Label>
    <Label x="425" y="225" size={9}>PROBAR RUTA</Label>
  </Frame>
}

function VisualC7() {
  return <Frame>
    <CityGrid x={55} y={45} w={410} h={160}/>
    <circle cx="115" cy="176" r="8" fill={rust}/>
    <path d="M115 176 L160 176 L160 135 L245 135" fill="none" stroke={gold} strokeWidth="5"/>
    <path d="M245 135 L245 90 M245 135 L325 135 M245 135 L245 184" fill="none" stroke={violet} strokeWidth="4" strokeDasharray="8 5"/>
    <circle cx="245" cy="135" r="13" fill={paper} stroke={violet} strokeWidth="3"/>
    <text x="245" y="141" textAnchor="middle" fontFamily="Georgia,serif" fontSize="18" fill={violet}>?</text>
    <Label x="350" y="225" size={9} fill={violet}>EL ESPACIO EXIGE INTERPRETACIÓN</Label>
  </Frame>
}

function VisualC8() {
  return <Frame>
    <line x1="70" y1="150" x2="450" y2="150" stroke={ink} strokeWidth="2"/>
    <circle cx="120" cy="150" r="8" fill={violet}/><circle cx="260" cy="150" r="10" fill={rust}/><circle cx="400" cy="150" r="8" fill={moss}/>
    <Label x="120" y="183" size={9}>¿DÓNDE ME DESVIÉ?</Label>
    <Label x="260" y="183" size={9}>AHORA</Label>
    <Label x="400" y="183" size={9}>¿VOY A LLEGAR?</Label>
    <Arrow x1={250} y1={105} x2={145} y2={105} stroke={violet}/>
    <Arrow x1={270} y1={105} x2={375} y2={105} stroke={moss}/>
    <Person x={455} y={78} scale={.45} fill={gold}/>
    <Label x="425" y="45" size={8} fill={gold}>OTRO COMO GUÍA</Label>
  </Frame>
}

function VisualC9() {
  return <Frame>
    {[
      {x:75,label:'A · sin destino',symbol:'○'},
      {x:195,label:'B · ruta cierta',symbol:'→'},
      {x:325,label:'C · sin urgencia',symbol:'≈'},
      {x:445,label:'D · con guía',symbol:'↗'},
    ].map((o,i)=><g key={o.label}>
      <rect x={o.x-52} y="55" width="104" height="115" rx="12" fill={i===1?'#e8efe9':'#f0e9dc'} stroke={i===1?moss:line}/>
      <text x={o.x} y="128" textAnchor="middle" fontFamily="Georgia,serif" fontSize="42" fill={[gold,moss,violet,rust][i]}>{o.symbol}</text>
      <Label x={o.x} y="195" size={8}>{o.label}</Label>
    </g>)}
    <Label x="260" y="228" size={9} fill={gold}>PROBAR QUÉ ES ESTRUCTURAL</Label>
  </Frame>
}

function VisualC10() {
  return <Frame>
    <circle cx="70" cy="80" r="26" fill="#eef0e8" stroke={moss}/><Label x="70" y="84" size={8}>DESTINO</Label>
    <circle cx="180" cy="80" r="26" fill="#f3e7e2" stroke={rust}/><Label x="180" y="84" size={8}>RUPTURA</Label>
    <circle cx="290" cy="80" r="26" fill="#eeecf3" stroke={violet}/><Label x="290" y="84" size={8}>ESPACIO</Label>
    <circle cx="400" cy="80" r="26" fill="#f5ecd9" stroke={gold}/><Label x="400" y="84" size={8}>BÚSQUEDA</Label>
    <Arrow x1={95} y1={105} x2={235} y2={163} stroke={moss}/><Arrow x1={190} y1={108} x2={245} y2={160} stroke={rust}/><Arrow x1={288} y1={108} x2={272} y2={157} stroke={violet}/><Arrow x1={395} y1={108} x2={290} y2={162} stroke={gold}/>
    <rect x="175" y="158" width="170" height="55" rx="16" fill={ink}/>
    <Label x="260" y="183" fill={paper}>ESTAR PERDIDO</Label>
    <Label x="260" y="199" size={8} fill={paper}>estructura provisional</Label>
  </Frame>
}

const visuals = {
  m1: VisualM1, m2: VisualM2, m3: VisualM3, m4: VisualM4,
  m5: VisualM5, m6: VisualM6, m7: VisualM7, m8: VisualM8,
  c1: VisualC1, c2: VisualC2, c3: VisualC3, c4: VisualC4, c5: VisualC5,
  c6: VisualC6, c7: VisualC7, c8: VisualC8, c9: VisualC9, c10: VisualC10,
}

export default function PhenomenologyNodeVisual({ id, title }) {
  const Visual = visuals[id] || VisualM1
  return <figure className="phen2d-visual" aria-label={'Representación gráfica de '+title}>
    <Visual />
    <figcaption>Representación esquemática · PHILOSOPHIA</figcaption>
  </figure>
}
