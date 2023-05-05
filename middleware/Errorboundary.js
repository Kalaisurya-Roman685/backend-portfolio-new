

export const ErrorStatus = (code, message) = async (req, res) => {
    return res.status(code).json(message);
}