const SelectElement = (selector) => {
    const element = document.querySelector(selector);
    if (element) return element;
    throw new Error(`${element} not found`);
    
}

const openTab = (evt,tabName) => {
    //document.getElementById('Cond').style.display = 'flex';
    // const tabContent = document.getElementsByClassName('popular__content');
    // for (let index = 0; index < tabContent.length; index++) {
    //     tabContent[index].style.display = 'none';
        
    // }
    // console.log(tabName);
    //document.getElementById(cityName).style.display = "block";
    // document.getElementById('Cond').style.display = "flex";
    evt.currentTarget.className += " active";
}