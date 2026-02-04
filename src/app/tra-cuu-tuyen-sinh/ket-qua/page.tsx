"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function KetQuaTraCuuPage() {
  const searchParams = useSearchParams();
  const cccd = searchParams.get("cccd");
  const sbd = searchParams.get("sbd");

  // Sample result data
  const studentInfo = {
    name: "Nguyễn Văn A",
    cccd: cccd || "0123456789",
    sbd: sbd || "HU2025",
    major: "Tài chính - ngân hàng",
  };

  const scores = [
    { id: 1, subject: "Toán", score: "8,25" },
    { id: 2, subject: "Ngữ văn", score: "7,50" },
    { id: 3, subject: "Tiếng Anh", score: "8,25" },
  ];

  const totalScore = "24,00";

  return (
    <main className="result-page">
      {/* Result Section */}
      <section className="result-section">
        <div className="container">
          {/* Section Header */}
          <div className="result-header">
            <span className="result-header__icon">
              <span style={{ fontSize: "20px" }}>🔍</span>
            </span>
            <h1 className="result-header__title">THÔNG TIN ĐIỂM THI</h1>
          </div>

          {/* Result Card */}
          <div className="result-card">
            {/* Student Info */}
            <div className="result-info">
              <div className="result-info__header">
                <span className="result-info__icon">
                  <span style={{ fontSize: "16px" }}>👤</span>
                </span>
                <span className="result-info__title">Thông tin thí sinh</span>
              </div>
              <div className="result-info__content">
                <div className="result-info__row">
                  <div className="result-info__col">
                    <div className="result-info__item">
                      <span className="result-info__label">Họ tên:</span>
                      <span className="result-info__value">{studentInfo.name}</span>
                    </div>
                    <div className="result-info__item">
                      <span className="result-info__label">Số CCCD:</span>
                      <span className="result-info__value">{studentInfo.cccd}</span>
                    </div>
                  </div>
                  <div className="result-info__col">
                    <div className="result-info__item">
                      <span className="result-info__label">Số báo danh:</span>
                      <span className="result-info__value">{studentInfo.sbd}</span>
                    </div>
                    <div className="result-info__item">
                      <span className="result-info__label">Ngành đăng ký:</span>
                      <span className="result-info__value">{studentInfo.major}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Score Table */}
            <div className="result-table-wrapper">
              <table className="result-table">
                <thead>
                  <tr>
                    <th className="result-table__th result-table__th--stt">STT</th>
                    <th className="result-table__th result-table__th--subject">
                      Môn thi
                    </th>
                    <th className="result-table__th result-table__th--score">Điểm thi</th>
                    <th className="result-table__th result-table__th--priority">
                      Điểm ưu tiên khu vực
                    </th>
                    <th className="result-table__th result-table__th--priority">
                      Điểm ưu tiên đối tượng
                    </th>
                    <th className="result-table__th result-table__th--note">Ghi chú</th>
                  </tr>
                </thead>
                <tbody>
                  {scores.map((score, index) => (
                    <tr key={score.id}>
                      <td className="result-table__td result-table__td--center">
                        {index + 1}
                      </td>
                      <td className="result-table__td">{score.subject}</td>
                      <td className="result-table__td result-table__td--score">
                        {score.score}
                      </td>
                      <td className="result-table__td result-table__td--center"></td>
                      <td className="result-table__td result-table__td--center"></td>
                      <td className="result-table__td"></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* Total Score */}
              <div className="result-total">
                <span className="result-total__label">Tổng điểm:</span>
                <span className="result-total__value">{totalScore}</span>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <div className="result-actions">
            <Link href="/tra-cuu-tuyen-sinh" className="result-actions__btn">
              <span style={{ fontSize: "20px" }}>←</span>
              Tra cứu lại
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
