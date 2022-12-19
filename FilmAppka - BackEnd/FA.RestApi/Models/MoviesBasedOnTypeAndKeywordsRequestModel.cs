using System;
using System.Collections.Generic;
using System.Text;

namespace FA.RestApi.Models
{
    public class MoviesBasedOnTypeAndKeywordsRequestModel
    {
        public List<int> typeIds { get; set; }

        public List<int> keywordIds { get; set; }
    }
}
