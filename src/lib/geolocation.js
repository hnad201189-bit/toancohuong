// Wraps the browser Geolocation API in a promise with Vietnamese error messages.
export function getCurrentPosition() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Trình duyệt của bạn không hỗ trợ định vị.'))
      return
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => resolve({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
      (err) => {
        if (err.code === err.PERMISSION_DENIED) {
          reject(new Error('Bạn đã từ chối quyền truy cập vị trí. Hãy cho phép trong cài đặt trình duyệt.'))
        } else {
          reject(new Error('Không thể xác định vị trí của bạn. Vui lòng thử lại.'))
        }
      },
      { enableHighAccuracy: true, timeout: 10000 }
    )
  })
}
