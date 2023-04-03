import React, {useState} from 'react';
import DropdownMenu from './DropdownMenu';
import {useForm} from 'react-hook-form';

const PerikananForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = data => {
        console.log(data);

        fetch("perikanan_api.php", {
            method: "POST",
            body: JSON.stringify(data)
        }).then(response => {
            if(response.ok) {
                console.log("Form data sent to PHP API successfully");
            } else {
                console.error("Error sending form data to PHP API");
            }
        }).catch(error => {
            console.error("Error sending form data to PHP API:", error);
        })
    }
    const [selectedKomoditi, setSelectedKomoditi] = useState(null);

    function handleKomoditiChange(value) {
        setSelectedKomoditi(value);
        console.log(value);
    }

    const komoditiOptions = ["Udang Putih", "Kepiting Bakau", "Bandeng", "Ikan Windu"];

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <DropdownMenu
                        id="komoditiOptions"
                        options={komoditiOptions}
                        defaultText="Pilih Komoditi"
                        onChange={handleKomoditiChange}
                        {...register("komoditiOptions", {required: true})}
                />
                </div>
                <div className="form">
                    <div>
                        <label htmlFor="volume">Volume (Ton)</label>
                        <input
                            type="number"
                            id="volume"
                            {...register("volume", {required: true, pattern: /^[0-9]/})}/>
                            {errors.volume && <p>Volume is required and must be a number</p>}
                    </div>
                    <div>
                        <label htmlFor="nilaiProduksi">Nilai Produksi</label>
                        <input
                            type="number"
                            id="nilaiProduksi"
                            {...register("nilaiProduksi", {required: true, pattern: /^[0-9]/})}/>
                    </div>
                    <button type="submit">Submit</button>
                </div>
            <p>Selected Komoditi: {selectedKomoditi}</p>
            </form>
            
        </div>
    );
}

export default PerikananForm;