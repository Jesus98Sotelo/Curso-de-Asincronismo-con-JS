const somethingWillHappend = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        } else {
            reject ('Whooops!');
        }
    });
};

somethingWillHappend()
    .then(response => console.log(response));

const somethingWillHappend2 = () => {
    return new Promise ((resolve, reject) => {
        if (false) {
            setTimeout(() => {
                resolve('True');
            }, 2000)
        } else {
            const error = Error('Whooops!');
            reject(error);
        }
    });
}

somethingWillHappend2()
    .then(response => console.log(response));

Promise.all([somethingWillHappend(), somethingWillHappend2()])
    .then(response => {
        console.log('Array of results', response);
    })