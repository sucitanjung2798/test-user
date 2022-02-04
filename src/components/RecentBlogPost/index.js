import React from 'react'
import { recentList } from "./dummy_recentList"

const RecentBlogPost = () => {
    return (
        <div>
            {recentList.map((item, index) => (
                <div class="d-flex mb-4">
                    <div class="flex-shrink-0">
                        <img src={item.image} width={"100px"} height={"80px"} className="gambar" />
                    </div>

                    <div class="flex-grow-1 ms-2 recent">
                        <div class="px-2 mb-2">
                            {item.title}
                        </div>
                        <div class="px-2 mb-2 recent color-recent">
                            {item.date}
                        </div>
                    </div>

                </div>
            ))}

        </div>
    )
}

export default RecentBlogPost
