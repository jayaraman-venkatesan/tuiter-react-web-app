import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
            <div class="wd-margin-left row d-flex align-items-center wd-space-between">
                <div class="wd-A__search-bar">
                    <i class="fa-sharp fa-solid fa-magnifying-glass wd-search-icon"></i>
                    <input class="wd-search_bar__input" type="text" placeholder="Search Twitter">
                </div>
                <div class="col-2 wd-search-icon">
                    <i class="fas fa-cog "></i>
                </div>
            </div>

            <ul class="nav nav-tabs mt-1 mb-1">
                <li class="nav-item">
                    <a class="nav-link active" href="../../../tuiter/explore/index.html">
                        For You
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html">
                        Trending
                    </a>
                </li>

                <li class=" nav-item">
                    <a class="nav-link" href="news.html,">
                        News
                    </a>
                </li>
                <li class=" nav-item">
                    <a class="nav-link" href="sports.html" tabindex="-1">
                        Sports
                    </a>
                </li>
                <li class=" nav-item d-none d-md-block d-lg-block d-xl-block d-xxl-block">
                    <a class="nav-link " href="#" tabindex="-1">
                        Entertainment
                    </a>
                </li>
            </ul>
            
           <!-- image with overlaid text -->
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
