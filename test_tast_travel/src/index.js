import './styles/main.scss'

let values = {
    counter1: 0,
    counter2: 0,
    counter3: 0,
    from: '',
    to: '',
    dateFrom: '',
    dateTo: ''
}


window.addEventListener('click', e => {
    console.log(e.path)
    if (e.target.getAttribute("type") == 'counterBTN') {
        let selector = e.target.getAttribute("counterSelector");
        switch (e.path[0].innerText) {
            case '+':
                for (elem in values) {
                    if (elem == selector && elem != 0) {
                        values[elem]++;
                        if (values[elem] >= e.target.getAttribute("max")) {
                            values[elem] = e.target.getAttribute("max");
                        }
                        document.getElementById(e.target.getAttribute("counterSelector")).innerHTML = values[elem]
                    }
                }
                break;
            case '-':
                for (elem in values) {
                    if (elem == selector) {
                        values[elem]--;
                        if (values[elem] <= e.target.getAttribute("min")) {
                            values[elem] = e.target.getAttribute("min");
                        }
                        document.getElementById(e.target.getAttribute("counterSelector")).innerHTML = values[elem]
                    }
                }
                break;
        }
    }
})

