// blogController.js

exports.create = async (req, res) => {
    
    res.status(200).json({ status: 'success', data: 'Blog created' });
  };
  
  exports.read = async (req, res) => {
    
    res.status(200).json({ status: 'success', data: 'Blog data' });
  };
  
  exports.delete = async (req, res) => {
    
    res.status(200).json({ status: 'success', data: 'Blog deleted' });
  };
  
  exports.update = async (req, res) => {
    
    res.status(200).json({ status: 'success', data: 'Blog updated' });
  };
  