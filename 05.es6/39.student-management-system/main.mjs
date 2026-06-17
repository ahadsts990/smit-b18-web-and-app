document.querySelector("form").addEventListener('submit', (e) => {
    e.preventDefault()

    const name = document.querySelector(".name").value
    const father = document.querySelector(".father").value
    const roll_no = document.querySelector(".roll_no").value
    const section = document.querySelector(".section").value

    let table = document.querySelector('.output')
    const tr = document.createElement('tr')

    let name_td = document.createElement('td')
    name_td.innerText = name

    let father_td = document.createElement('td')
    father_td.innerText = father

    let roll_no_td = document.createElement('td')
    roll_no_td.innerText = roll_no

    let section_td = document.createElement('td')
    section_td.innerText = section

    tr.appendChild(name_td)
    tr.appendChild(father_td)
    tr.appendChild(roll_no_td)
    tr.appendChild(section_td)

    table.appendChild(tr)
    e.target.reset()

})
