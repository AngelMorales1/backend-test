const convert = async (req, res = response) => {
  let url = "https://openexchangerates.org/api/";
  try {
    const { from, to, amount } = req.body;
    const { rates } = await fetch(
      `${url}/latest.json?app_id=${process.env.APP_ID}`
    ).then((response) => response.json());

    let convertion = (amount / rates[from]) * rates[to];

    res.status(200).json({
      ok: true,
      convertion,
    });
    
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Error en el servidor",
    });
  }
};

export default convert;
